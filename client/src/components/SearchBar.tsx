import styled from 'styled-components'
import React, { FC } from 'react'

interface LogoProps {
    className?: string
}

const SearchBar: FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
            snatchmap
        </div>
    )
}

export default styled(SearchBar)`
    position: absolute;
    background: red;
    left: 50%;
    top: 10px;
`