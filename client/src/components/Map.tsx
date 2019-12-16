import styled from 'styled-components'
import React, { FC, useContext, memo, useMemo } from 'react'
import ReactMapboxGl, { Layer, Feature, Marker, Image as MapImage } from 'react-mapbox-gl'
import useAxios from 'axios-hooks'
import { StateContext } from '../App'
import Icon from '../components/Icon'
import plane from '../svg/map/plane.svg'
import ship from '../svg/map/ship.svg'
import pin from '../svg/map/pin.svg'
import device from '../breakpoints'
import Div100vh from 'react-div-100vh'
import { Property } from 'apiTypes'

function createImage(src: string) {
    const image = new Image(75, 75)
    image.src = src
    return image
}

const planeImage = createImage(plane)
const shipImage = createImage(ship)
const pinImage = createImage(pin)

const MapComponent = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZnhscjgiLCJhIjoiY2s0NGpieWpkMGJ6eDNvbWdvcml1aG1pZSJ9.pAeNPdFX91L9Z33XLXrnbA',
})

const StyledMap = styled(MapComponent)`
    height: 100%;
    width: 100%;
    transform: translateY(-30%);
    transition: transform 300ms ease;

    @media ${device.laptop} {
        transform: translateY(0);
    }
`

interface MapProps {
    className?: string
}

function swap(coord: [number, number]): [number, number] {
    return [coord[1], coord[0]]
}

interface MapApiResult {
    items: Property[]
}

interface PinLayerProps {
    imageName: string,
    objects: Property[]
}

const PinLayer: React.FC<PinLayerProps> = ({ imageName, objects }) => {
    const { dispatch } = useContext(StateContext)
    return (
        <Layer type="symbol" id={`marker-${imageName}`} layout={{ 'icon-image': imageName, 'icon-size': 0.5 }}>
            {objects.map((item: Property) =>
                <Feature
                    onClick={() => dispatch({ type: 'SELECT_PROPERTY', propertyId: item._id, ownerId: item.personId })}
                    key={item._id}
                    coordinates={swap(item.location.geometry.coordinates)} />
            )}
        </Layer>
    )
}

const defaultCenter: [number, number] = [37.627771, 55.7537485]

const Images: FC = memo(() => {
    return (
        <>
            <MapImage id='plane-icon' data={planeImage} />
            <MapImage id='ship-icon' data={shipImage} />
            <MapImage id='pin-icon' data={pinImage} />
        </>
    )
})

const initialZoom: [number] = [3]

const Map: FC<MapProps> = ({ className }) => {
    const { state: { propertyId } } = useContext(StateContext)
    const [{ data, loading, error }] = useAxios<MapApiResult>(
        'https://branched-glue.glitch.me/object/objects'
    )

    const pins = data && data.items.filter((item) => item.type === 'building' && !!item.location)
    const ships = data && data.items.filter((item) => item.type === 'yacht' && !!item.location)
    const planes = data && data.items.filter((item) => item.type === 'plane' && !!item.location)

    const center = useMemo(() => {
        if (data) {
            const obj = data.items.find(i => i._id === propertyId)
            if (obj && obj.location) {
                return swap(obj.location.geometry.coordinates)
            }
        }
        return defaultCenter
    }, [propertyId, data])

    return (
        <Div100vh>
            <StyledMap
                style="mapbox://styles/mapbox/light-v10" //eslint-disable-line
                center={center}
                className={className}
                zoom={initialZoom}
                movingMethod='easeTo'
            >
                {pins && <PinLayer objects={pins} imageName='pin-icon' />}
                {ships && <PinLayer objects={ships} imageName='ship-icon' />}
                {planes && <PinLayer objects={planes} imageName='plane-icon' />}
                <Images />
                {/* <>{!loading && !error ? <Layers data={data} /> : null}</> */}
            </StyledMap>
        </Div100vh>
    )
}

export default memo(styled(Map)`
    height: 100vh;
    width: 100vw;
`)
