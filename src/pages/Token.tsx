import { useState } from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack
} from '@chakra-ui/react'
import { ethMetaMask, type ConnectReturnType } from '@/utilities'

export default function Token() {

  // States
  const [mmData, setMmData] = useState<ConnectReturnType>()

  async function connectToMetaMask() {
    const data = await ethMetaMask.connect()
    setMmData(data)
  }

  return (
    <>
      <Container maxW={'3xl'} className='h-screen flex items-center justify-center'>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            NEW CRYPTOCURRENCY<br />
            <Text as={'span'} color={'red.400'}>
              ACCOIN
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            You can buy coins here only if you have MetaMask extension installed in your browser
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            {mmData ? null :
              <Button
                colorScheme={'red'}
                rounded={'full'}
                px={6}
                onClick={() => { connectToMetaMask() }}
              >
                Connect to MetaMask
              </Button>
            }
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
