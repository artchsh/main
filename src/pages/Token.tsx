import { Section } from '@/components'
import { useEffect, useState, type ReactNode } from 'react'
import Button from '@/components/Button'
import { toast } from 'react-hot-toast'
import { eth } from '@/utilities'

export default function TokenPage() {
    // states
    const [web3_address, setWeb3_address] = useState<string>('')
    const [web3_connected, setWeb3_connected] = useState<boolean>(false)

    // Functions
    const checkWeb3 = () => {
        if (typeof window.ethereum !== 'undefined') {
            localStorage.setItem('metamask', 'true')
            if (localStorage.getItem('metamask_address') !== '') {
                setWeb3_connected(false)
            }
            return true
        }
        localStorage.setItem('metamask', 'false')
        return false
    }

    const connectToEth = async () => {
        const address = await eth.getAddress()
        if (localStorage.getItem('metamask') === 'true') {
            localStorage.setItem('metamask_address', '')
            localStorage.setItem('metamask_address', address)
            if (localStorage.getItem('metamask_address') !== '') {
                setWeb3_address(address)
                setWeb3_connected(true)
            }
            setWeb3_connected(false)
        }
    }

    useEffect(() => {
        checkWeb3()
    }, [web3_address, web3_connected])


    return (
        <Section className='w-screen flex justify-center items-center'>
            <div className='flex flex-col'>
                <span className='text-7xl text-white'>CRYPTOCOIN<span className='ml-2 text-sm font-bold text-neutral-500'>COIN</span></span>
                <div className='flex justify-center mt-3'>
                    {!web3_connected &&
                        <Button type='button' onClick={connectToEth}>Connect</Button>
                    }
                    {web3_connected &&
                    <>
                        
                    </>
                    }
                </div>
            </div>

        </Section>
    )
}