import React from 'react'
import { Button } from '@/components'
import { FaTelegramPlane, FaGithub } from 'react-icons/fa'
export default function NavigationBar() {
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 w-screen flex justify-between items-center h-16'>
                <div className='text-2xl ml-4 font-semibold text-white'>
                    <h1>ART<b>CHSH</b></h1>
                </div>
                <div className='mx-2 grid grid-cols-2'>
                    <Button type='button' onClick={() => { window.open('https://t.me/artchsh', '_blank') } }><FaTelegramPlane className='mr-2'/>Telegram</Button>
                    <Button type='button' onClick={() => { window.open('https://github.com/artchsh', '_blank') }}><FaGithub className='mr-2'/>Github</Button>
                </div>
            </nav>
        </>
    )
}