import React from 'react'
import { Link } from '@/components'

export type CardGithubType = {
    data: {
        id?: string
        created_at: string
        default_branch: string
        homepage: string
        description: string
        html_url: string
        language: string
        license: string
        name?: string
        updated_at: string
    }
}

export default function CardGithub(props: CardGithubType) {

    // Setups
    const { created_at, default_branch, homepage, description, html_url, language, license, name, updated_at } = props.data

    // States
    const [createdAt, setCreatedAt] = React.useState<string>('')
    const [updatedAt, setUpdatedAt] = React.useState<string>('')

    React.useEffect(() => {
        const created_at_timestamp = Date.parse(created_at)
        const updated_at_timestamp = Date.parse(updated_at)
        const created_at_Date = new Date(created_at_timestamp)
        const update_at_Date = new Date(updated_at_timestamp)
        setCreatedAt(created_at_Date.getDate() + "/" + (created_at_Date.getMonth() + 1) + "/" + created_at_Date.getFullYear())
        setUpdatedAt(update_at_Date.getDate() + "/" + (update_at_Date.getMonth() + 1) + "/" + update_at_Date.getFullYear())
    })

    return (
        <div className='bg-neutral-800 flex flex-col p-4 max-w-xl min-w-min text-white rounded m-2 justify-between'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <div className='font-bold text-xl'>
                        {name}
                    </div>
                    <div className='text-neutral-400 text-sm'>
                        Created: {createdAt}<br />
                        Updated: {updatedAt}
                    </div>
                </div>
                <div className='flex flex-col text-neutral-400 ml-10'>
                    <div>
                        Language: {language || 'Unknown'}
                    </div>
                    <div>
                        License: {license || 'None'}
                    </div>
                </div>
            </div>
            <div>
                {description}
            </div>
            <div>
                <Link href={html_url}>Repository</Link>
            </div>
        </div>
    )
}