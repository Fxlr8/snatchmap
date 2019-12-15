import SVG, { IProps as SvgProps } from 'react-inlinesvg'
import React, { FC } from 'react'

interface IconProps {
    src: string
    className?: string
}

const Icon: FC<IconProps | SvgProps> = (props) => {
    return (
        <SVG  {...props} />
    )
}

export default Icon
