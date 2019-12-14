import styled from 'styled-components'
import React, { FC } from 'react'

interface LogoProps {
    className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
            snatchmap
        </div>
    )
}

export default styled(Logo)`
    position: absolute;
    background: #fff;
    left: 50%;
    top: 10px;
    padding: 10px;
    border-radius: 38px;
    transform: translate(-50%, 0);
    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);
    font-weight: bold;
`