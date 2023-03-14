import { Bars3Icon, ChatBubbleBottomCenterIcon, FilmIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon, MapIcon, PlusIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { IndragramContext } from '../store/context'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Leftbar() {
    const {state, dispatch} = useContext(IndragramContext)
    const {data: session} = useSession()
    const router = useRouter()

    const Menu = ({title, icon, click}) => {
        return (
            <div onClick={click} 
            className='rounded-full p-3 cursor-pointer hover:bg-slate-100 flex items-center gap-x-3.5 group'>
                <div className={`h-[25px] p-px group-hover:p-0
                ${state.modal ? state.modal === title.toLowerCase() && 'text-blue-500' : state.menu === title.toLowerCase() && 'text-blue-500'}`}>
                    {icon}
                </div>
                <h1 className={`hidden xl:grid
                ${state.modal ? state.modal === title.toLowerCase() && 'text-blue-500' : state.menu === title.toLowerCase() && 'text-blue-500'}`}>{title}</h1>
            </div>
        )
    }

    return (
        <div className="py-9 px-3 z-10 hidden md:grid xl:w-[245px] h-screen content-between border-r border-slate-200 sticky top-0">
            <h1 className="hidden xl:grid font-logo text-2xl font-bold mx-3">Indragram</h1>
            <div className='xl:hidden rounded-full p-3 cursor-pointer hover:bg-slate-100 flex items-center gap-x-3.5 group'>
                <div className='h-[25px] p-px group-hover:p-0'>
                    <RectangleGroupIcon className='h-full' />
                </div>
            </div>
            <div className='grid gap-y-1.5'>
                <Menu icon={<HomeIcon className='h-full' />} title='Home' 
                click={() => {router.push('/'); dispatch({type: 'CHANGE_MENU', menu: 'home'})}} />
                <Menu icon={<MagnifyingGlassIcon className='h-full' />} title='Search' 
                click={() => dispatch({type: 'CHANGE_MODAL', modal: 'search'})} />
                <Menu icon={<MapIcon className='h-full' />} title='Explore' 
                click={() => {router.push('/explore'); dispatch({type: 'CHANGE_MENU', menu: 'explore'})}} />
                <Menu icon={<FilmIcon className='h-full' />} title='Reels' />
                <Menu icon={<ChatBubbleBottomCenterIcon className='h-full' />} title='Messages' />
                <Menu icon={<HeartIcon className='h-full' />} title='Notifications' 
                click={() => dispatch({type: 'CHANGE_MODAL', modal: 'notifications'})} />
                <Menu icon={<PlusIcon className='h-full' />} title='Create' 
                click={() => dispatch({type: 'CHANGE_MODAL', modal: 'create'})} />
                <Menu icon={<img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
                className='h-full aspect-square rounded-full border border-slate-200 p-px' />} title='Profile' />
            </div>
            <Menu icon={<Bars3Icon className='h-full' />} title='More' 
            click={() => dispatch({type: 'CHANGE_MODAL', modal: 'more'})} />
        </div>
    )
}