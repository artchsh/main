import React from 'react'

export type Button = {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    className?: string
    type: 'submit' | 'reset' | 'button'
    children: any
}

export default function Button(props: Button) {

    const defaultClassName: string = 'transition-all text-white font-semibold uppercase flex flex-row items-center justify-center bg-neutral-600 px-4 py-2 rounded m-1 mx-2 hover:bg-neutral-700 active:scale-95'

    return (
        <button type={props.type} className={defaultClassName + ' ' + (props.className || '')} onClick={props.onClick}>{props.children}</button>
    )
}