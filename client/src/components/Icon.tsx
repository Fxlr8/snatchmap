import SVG, { IProps as SvgProps } from 'react-inlinesvg'
import React, { FC } from 'react'

// у либы какие-то проблемы с типами, этот компонент просто временный фикс

interface IconProps {
    src: string
    className?: string
}

const Svg = SVG as any as FC<IconProps | SvgProps>

const Icon: FC<IconProps | SvgProps> = (props) => {
    return (
        <Svg  {...props} />
    )
}

export default Icon
