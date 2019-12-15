import styled from 'styled-components'
import React, { FC } from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import useAxios from 'axios-hooks'

import plane from 'svg/map/plane.svg'
import ship from 'svg/map/ship.svg'
import pin from 'svg/map/pin.svg'

import { Property } from 'apiTypes'

const MapComponent = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZnhscjgiLCJhIjoiY2s0NGpieWpkMGJ6eDNvbWdvcml1aG1pZSJ9.pAeNPdFX91L9Z33XLXrnbA',
})

interface MapProps {
    className?: string
}

const Layers: React.FC<{ data: { items: Property[] } }> = ({ data }) => {
    const pins = data.items.filter((item: Property) => item.type === 'building')
    const ships = data.items.filter((item: Property) => item.type === 'yacht')
    const planes = data.items.filter((item: Property) => item.type === 'plane')

    console.log(pins, ships, planes)

    return (
        <>
            {pins.map((item: Property) => {
                return (
                    <Marker key={item._id} coordinates={item.location.geometry.coordinates}>
                        <img src={pin} alt={'plane'} />
                    </Marker>
                )
            })}
            {planes.map((item: Property) => {
                return (
                    <Marker key={item._id} coordinates={item.location.geometry.coordinates}>
                        <img src={plane} alt={'plane'} />
                    </Marker>
                )
            })}
            {ships.map((item: Property) => {
                return (
                    <Marker key={item._id} coordinates={item.location.geometry.coordinates}>
                        <img src={ship} alt={'plane'} />
                    </Marker>
                )
            })}
        </>
    )
}

const Map: FC<MapProps> = ({ className }) => {
    const [{ data, loading, error }] = useAxios(
        'https://branched-glue.glitch.me/object/objects?fields=link,name,text,personInfo,locationUrl,location,type'
    )

    return (
        <MapComponent
            style="mapbox://styles/mapbox/light-v10" //eslint-disable-line
            center={[37.627771, 55.7537485]}
            zoom={[2]}
            className={className}
        >
            <>{!loading && !error ? <Layers data={data} /> : null}</>
        </MapComponent>
    )
}

export default styled(Map)`
    height: 100vh;
    width: 100vw;
`
