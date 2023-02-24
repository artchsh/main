import React from 'react'

export type LinkType = {
    children?: React.ReactNode
    href: string
    className?: string
}

export default function Link(props: LinkType) {

    // Setups
    const { children, href, className = '' } = props

    // States
    const [defaultClasses, setDefaultClasses] = React.useState<string>('underline underline-offset-2 hover:text-white/75 transition-all')

    React.useEffect(() => {
        if(className !== '') {
            setDefaultClasses(defaultClasses + ' ' + className)
        }
    }, [])

    return (
        <a className={defaultClasses} href={href} target='_blank'>{children}</a>
    )
}