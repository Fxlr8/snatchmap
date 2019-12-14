import styled from 'styled-components'
import React, { FC } from 'react'

interface LogoProps {
    className?: string
}

const FilterButtonGroup: FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
        </div>
    )
}

export default styled(FilterButtonGroup)`
    position: absolute;
    background: red;
    left: 50%;
    top: 10px;
`