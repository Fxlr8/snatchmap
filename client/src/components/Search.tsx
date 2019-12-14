import styled from 'styled-components'
import React, { FC } from 'react'

interface LogoProps {
    className?: string
}

const SearchIcon = styled.div`
    width: 20px;
    height: 20px;
    background: rgba(0,0,0,0.5);
`
const ClearIcon = styled.div`
    width: 20px;
    height: 20px;
    background: rgba(0,0,0,0.5);
`
const Input = styled.input`
    width: 250px;
    height: 36px;
    border: none;
    border-right: 1px solid rgba(0,0,0,0.2);
    margin: 0 3px 0 0
`

const Search: FC<LogoProps> = ({ className }) => {
    return (
        <label className={className}>
            <SearchIcon />
            <Input type="text" placeholder="Поиск объектов и транспорта" />
            <ClearIcon />
        </label>
    )
}

export default styled(Search)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    position: absolute;
    background: #fff;
    top: 10px;
    left: 10px;
    border-radius: 4px;
`