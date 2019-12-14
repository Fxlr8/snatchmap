import styled from 'styled-components'
import React, { FC } from 'react'
import Icon from './Icon'
import logoSvg from '../logo.svg'

const LogoText = styled.div`
    font-family: Helvetica;
    font-size: 25px;
    color: #000000;
    margin-left: 10px;
    font-weight: bold;
`

const LogoIcon = styled(Icon)`
    fill: #E32525;
`

interface LogoProps {
    className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
            <LogoIcon src={logoSvg} />
            <LogoText>snatchmap</LogoText>
        </div>
    )
}

export default styled(Logo)`
    position: absolute;
    background: #fff;
    left: 50%;
    top: 10px;
    padding: 0 26px;
    border-radius: 38px;
    transform: translateX(-50%);
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.20);
    border-radius: 27px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
`