import React from 'react'
import { Link } from '@/components'
import { Javascript, Typescript, CSS, Python, Github } from '@/components/Icons'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'

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
    const [repoLanguage, setRepoLanguage] = React.useState<React.ReactNode>()

    // Functions
    const timeFormat = () => {
        const created_at_timestamp = Date.parse(created_at)
        const updated_at_timestamp = Date.parse(updated_at)
        const created_at_Date = new Date(created_at_timestamp)
        const update_at_Date = new Date(updated_at_timestamp)
        setCreatedAt(created_at_Date.getDate() + "/" + (created_at_Date.getMonth() + 1) + "/" + created_at_Date.getFullYear())
        setUpdatedAt(update_at_Date.getDate() + "/" + (update_at_Date.getMonth() + 1) + "/" + update_at_Date.getFullYear())
    }

    const languageLogoDetector = () => {
        switch (language) {
            case 'TypeScript':
                setRepoLanguage(<Typescript />)
                break
            case 'JavaScript':
                setRepoLanguage(<Javascript />)
                break
            case '':
                setRepoLanguage(<Github />)
                break
            case 'CSS':
                setRepoLanguage(<CSS />)
                break
            case 'Python':
                setRepoLanguage(<Python />)
                break
            default:
                setRepoLanguage(language)
                break
        }
    }

    React.useEffect(() => {
        timeFormat()
        languageLogoDetector()
    }, [])

    return (
        <Card maxW='sm' display={'flex'} colorScheme='red'>
            <CardBody>
                <Stack spacing={3}>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        Created: {createdAt}<br />
                        Last update: {updatedAt}<br />
                        {description}
                    </Text>
                    <Text color='red.600' fontSize='2xl'>
                        {language}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button as={'a'} variant='solid' colorScheme='red' href={html_url}>
                        Repository
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}