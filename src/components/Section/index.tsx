import React from 'react'

export type Section = {
    children?: any
    className?: string
    fullHeight?: boolean
}

export default function Section(props: Section) {

    // Setups
    const { children, className = '', fullHeight = true } = props

    // States
    const [defaultClassName, setDefaultClassName] = React.useState<string>('h-screen')

    React.useEffect(() => {
        // if (fullHeight) {
        //     if(!defaultClassName.split(" ").includes('h-screen')) {
        //         setDefaultClassName(defaultClassName + 'h-screen')
        //     }
        // }
        // if (defaultClassName !== '') {
        //     setDefaultClassName(defaultClassName + ' ' + className)
        // }
        setDefaultClassName(defaultClassName + ' ' + className)
    }, [])

    return (
        <section className={defaultClassName}>
            {children}
        </section>
    )
}