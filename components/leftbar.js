import { IoLogoInstagram } from 'react-icons/io5'
import { HiOutlineHome, HiOutlineMagnifyingGlass, HiOutlineMap, 
HiOutlineFilm, HiOutlineChatBubbleLeft, HiOutlineHeart, HiOutlinePlus, HiOutlineBars3, 
HiHome, HiMagnifyingGlass, HiMap, HiFilm, HiChatBubbleLeft, HiHeart, HiPlus, HiBars3 } from 'react-icons/hi2'
import { useContext } from 'react'
import { IndragramContext } from '../store/context'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Leftbar() {
    const {state, dispatch} = useContext(IndragramContext)
    const {data: session} = useSession()
    const router = useRouter()
    
    const Menu = ({title, icon, filled, click, selected}) => {
        return (
            <div onClick={click} 
            className='rounded-full p-3 cursor-pointer hover:bg-slate-100 flex items-center gap-x-3.5 group'>
                <div className='h-[28px] aspect-square p-px group-hover:p-0'>
                    {selected ? filled : icon}
                </div>
                <h1 className={`hidden xl:grid ${selected && 'font-bold'}`}>{title}</h1>
            </div>
        )
    }

    return (
        <div className="py-9 px-3 z-10 hidden md:grid xl:w-[245px] h-screen content-between border-r border-slate-200 sticky top-0">
            <h1 className="hidden xl:grid font-logo text-2xl font-bold mx-3 cursor-pointer" 
            onClick={() => router.push('/')}>Indragram</h1>
            <div className='xl:hidden rounded-full p-3 cursor-pointer hover:bg-slate-100 flex items-center gap-x-3.5 group'
            onClick={() => router.push('/')}>
                <div className='h-[28px] p-px group-hover:p-0'>
                    <IoLogoInstagram className='h-full w-full' />
                </div>
            </div>
            <div className='grid gap-y-1.5'>
                <Menu title='Home' 
                icon={<HiOutlineHome className='h-full w-full' />}
                filled={<HiHome className='h-full w-full' />}
                click={() => router.push('/')}
                selected={!state.modal && router.pathname === '/' && true} />
                
                <Menu title='Search' 
                icon={<HiOutlineMagnifyingGlass className='h-full w-full' />}
                filled={<HiMagnifyingGlass className='h-full w-full' />} 
                click={() => dispatch({type: 'CHANGE_MODAL', modal: 'search'})}
                selected={state.modal === 'search' && true} />
                
                <Menu title='Explore' 
                icon={<HiOutlineMap className='h-full w-full' />}
                filled={<HiMap className='h-full w-full' />} 
                click={() => router.push('/explore')}
                selected={!state.modal && router.pathname === '/explore' && true} />
                
                <Menu title='Reels'
                icon={<HiOutlineFilm className='h-full w-full' />}
                filled={<HiFilm className='h-full w-full' />} 
                click={() => router.push('/reels')}
                selected={!state.modal && router.pathname === '/reels' && true} />
                
                <Menu title='Messages' 
                icon={<HiOutlineChatBubbleLeft className='h-full w-full' />} />
                
                <Menu title='Notifications' 
                icon={<HiOutlineHeart className='h-full w-full' />}
                filled={<HiHeart className='h-full w-full' />}
                click={() => dispatch({type: 'CHANGE_MODAL', modal: 'notifications'})}
                selected={state.modal === 'notifications' && true} />
                
                <Menu title='Create'
                icon={<HiOutlinePlus className='h-full w-full' />}
                filled={<HiPlus className='h-full w-full' />}
                click={() => dispatch({type: 'CHANGE_MODAL', modal: 'create'})}
                selected={state.modal === 'create' && true} />
                
                <Menu title='Profile' 
                icon={<img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
                className='h-full aspect-square rounded-full border border-slate-300 p-px' />} />
            </div>
            <Menu title='More'
            icon={<HiOutlineBars3 className='h-full w-full' />}
            filled={<HiBars3 className='h-full w-full' />}
            click={() => dispatch({type: 'CHANGE_MODAL', modal: 'more'})}
            selected={state.modal === 'more' && true} />
        </div>
    )
}