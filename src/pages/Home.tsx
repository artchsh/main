import { Card, CardGithub, Section } from '@/components'
import React from 'react'
import { CardGithubType } from '../components/Card/Github';

export default function Home() {

    // States
    const [data, setData] = React.useState<CardGithubType["data"][]>([])

    React.useEffect(() => {
        fetch('https://api.github.com/users/artchsh/repos').then((response) => response.json()).then((data) => {
            let newData: any[] = []
            data.forEach((element: any) => {
                let newRepo = {}
                for (const [key, value] of Object.entries(element)) {
                    if (typeof '' !== typeof value && typeof 123 !== typeof value && typeof true !== typeof value) {
                        Object.defineProperty(newRepo, key, {
                            value: '',
                            writable: true
                        })
                    } else {
                        Object.defineProperty(newRepo, key, {
                            value: value,
                            writable: true
                        })
                    }
                }
                newData.push(newRepo)
            })
            setData(newData)
        })
    }, [])

    return (
        <>
            <Section fullHeight className='flex justify-center items-center'>
                <div style={{ width: 1, height: 64, }} />
                <div className='flex flex-wrap max-w-3xl justify-center'>
                    {data.map((repo) => (
                        <CardGithub key={repo.id} data={repo} />
                    ))}
                </div>
            </Section>
        </>
    )
}