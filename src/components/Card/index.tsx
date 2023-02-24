import React from 'react'

export type CardProps = {
    title: string
    children?: React.ReactNode
    actions?: React.ReactNode
}

export default function Card(props: CardProps) {
    const { title, children, actions } = props

    return (
        <div className='p-3 flex flex-col rounded shadow h-96 max-w-xl bg-neutral-700 m-2'>
            <div className='font-semibold text-2xl text-white'>
                {title}
            </div>
            <div className='text-neutral-300'>
                {children}
            </div>
            {actions &&
                <div className='flex flex-end'>
                    {actions}
                </div>
            }
        </div>
    )
}