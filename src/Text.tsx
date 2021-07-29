import React from 'react'
import { FC } from 'react'
type Props = {
    color: string;
    fontSize: string;
}

const Text: FC<Props> = (props) => {
    const { color, fontSize, children } = props;
    return (
        <>
            <p style={{ color, fontSize }}>テキストです</p>
            <p>{children}</p>
        </>
    )
}

export default Text
