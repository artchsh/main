import { Suspense } from 'react'
import { CardGithub, Section } from '@/components'
import React from 'react'
import { CardGithubType } from '../components/Card/Github'
import { motion as m } from 'framer-motion'
import { ObjectsToNull } from '@/utilities'

export default function Projects() {

    // States
    const [data, setData] = React.useState<CardGithubType["data"][]>([])

    React.useEffect(() => {
        fetch('https://api.github.com/users/artchsh/repos').then((response) => response.json()).then((data) => {
            setData(ObjectsToNull(data))
        })
    }, [])

    return ( // grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2
        <>
            <Section fullHeight className='md:flex md:justify-center md:items-center'>
                <div style={{ width: 1, height: 64, }} />
                <m.div className='max-w-5xl mx-auto' initial={{  opacity: 0  }} animate={{ opacity: 1 }}>
                    <Suspense fallback={null}>
                        <div className='grid max-[600px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                            {data.map((repo) => (
                                <CardGithub key={repo.id} data={repo} />
                            ))}
                        </div>
                    </Suspense>
                </m.div>
            </Section>
        </>
    )
}