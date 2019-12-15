import styled from 'styled-components'
import React, { FC } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import useAxios from 'axios-hooks'

// import plane from 'svg/plane.svg'
// import ship from 'svg/ship.svg'
import pin from 'svg/pin.svg'
import { Property } from 'apiTypes'

const MapComponent = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZnhscjgiLCJhIjoiY2s0NGpieWpkMGJ6eDNvbWdvcml1aG1pZSJ9.pAeNPdFX91L9Z33XLXrnbA',
})

interface MapProps {
    className?: string
}

const layoutLayer = { 'icon-image': 'pin' }

const image = new Image()
image.src = pin
const images: any = ['pin', image]

const Map: FC<MapProps> = ({ className }) => {
    const [{ data, loading, error }] = useAxios(
        'https://branched-glue.glitch.me/object/objects?fields=link,name,text,personInfo,locationUrl,location'
    )

    console.log(data)

    return (
        <MapComponent
            style="mapbox://styles/mapbox/light-v10" //eslint-disable-line
            center={[37.627771, 55.7537485]}
            className={className}
        >
            <>
                {!loading && !error ? (
                    <Layer type="symbol" id="marker" layout={layoutLayer} images={images}>
                        {data.items.map((item: Property) => {
                            const [lat, lng] = item.location.geometry.coordinates
                            const coordinates = [lat, lng]
                            return <Feature key={item._id} coordinates={coordinates} />
                        })}
                    </Layer>
                ) : null}
            </>
        </MapComponent>
    )
}

export default styled(Map)`
    height: 100vh;
    width: 100vw;
`
