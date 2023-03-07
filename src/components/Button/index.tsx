import React from 'react'

export type Button = {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    className?: string
    type: 'submit' | 'reset' | 'button'
    children: any
}
export default function Button(props: Button) {

    const defaultClassName: string = 'inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-95 transition-all'

    React.useEffect(() => {

    }, [props.className])

    return (
        <button type={props.type} className={defaultClassName + ' ' + (props.className || '')} onClick={props.onClick}>{props.children}</button>
    )
}