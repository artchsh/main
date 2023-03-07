import { FaTelegramPlane, FaGithub } from 'react-icons/fa'
import { Token, Home, Projects } from '../Icons'
const linkStyle = 'flex text-white items-center text-center justify-center transition-all hover:underline'

export default function NavigationBar() {
    return (
        <nav className='fixed top-0 left-0 right-0 w-screen h-16 flex justify-center'>
            <div className='grid grid-cols-3 grid-rows-1 max-w-5xl'>
                <div className='grid grid-cols-2 text-xl md:text-xl'>
                    <a className={linkStyle} href='https://t.me/artchsh'><FaTelegramPlane className='md:mr-2' /><span className='hidden md:block'>Telegram</span></a>
                    <a className={linkStyle} href='https://github.com/artchsh'><FaGithub className='md:mr-2' /><span className='hidden md:block'>Github</span></a>
                </div>
                <div className='text-2xl ml-4 font-semibold text-white flex justify-center items-center cursor-default selection:bg-none'>
                    <h1>ART<strong>CHSH</strong></h1>
                </div>
                <div className='md:text-xl text-white grid grid-cols-3 text-xl'>
                    <a href='/' className={linkStyle}><Home className='md:mr-2' /><span className='hidden md:block'>Home</span></a>
                    <a href='/projects' className={linkStyle}><Projects className='md:mr-2' /><span className='hidden md:block'>Projects</span></a>
                    <a href='/token' className={linkStyle}><Token className='md:mr-2' /><span className='hidden md:block'>Token</span></a>
                </div>
            </div>
        </nav>
    )
}