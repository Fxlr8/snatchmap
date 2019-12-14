import styled from 'styled-components'
import React, { FC } from 'react'
import ReactMapboxGl from 'react-mapbox-gl';

const MapComponent = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZnhscjgiLCJhIjoiY2s0NGpieWpkMGJ6eDNvbWdvcml1aG1pZSJ9.pAeNPdFX91L9Z33XLXrnbA'
});

interface MapProps {
    className?: string
}

const Map: FC<MapProps> = ({ className }) => {
    return (
        <MapComponent
            style='mapbox://styles/mapbox/light-v10'
            center={[37.627771, 55.7537485]}
            className={className}
        />
    )
}

export default styled(Map)`
    height: 100vh;
    width: 100vw;
`