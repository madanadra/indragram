import { Bars3Icon, ChatBubbleBottomCenterIcon, FilmIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon, MapIcon, PlusIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'

export default function Leftbar({setMore, setCreate, setNotifications, setSearch}) {
    const {data: session} = useSession()

    const Menu = ({title, icon, click}) => {
        return (
            <div onClick={click} 
            className='rounded-full p-3 cursor-pointer hover:bg-slate-100 flex items-center gap-x-3.5 group'>
                <div className='h-[25px] p-px group-hover:p-0'>
                    {icon}
                </div>
                <h1 className='hidden xl:grid'>{title}</h1>
            </div>
        )
    }

    return (
        <div className="py-9 px-3 hidden md:grid xl:w-[245px] h-screen content-between border-r border-slate-200 sticky top-0">
            <h1 className="hidden xl:grid font-logo text-2xl font-bold mx-3">Indragram</h1>
            <div className='xl:hidden rounded-full p-3 cursor-pointer hover:bg-slate-100 flex items-center gap-x-3.5 group'>
                <div className='h-[25px] p-px group-hover:p-0'>
                    <RectangleGroupIcon className='h-full' />
                </div>
            </div>
            <div className='grid gap-y-1.5'>
                <Menu icon={<HomeIcon className='h-full' />} title='Home' />
                <Menu icon={<MagnifyingGlassIcon className='h-full' />} title='Search' click={() => setSearch(true)} />
                <Menu icon={<MapIcon className='h-full' />} title='Explore' />
                <Menu icon={<FilmIcon className='h-full' />} title='Reels' />
                <Menu icon={<ChatBubbleBottomCenterIcon className='h-full' />} title='Messages' />
                <Menu icon={<HeartIcon className='h-full' />} title='Notifications' click={() => setNotifications(true)} />
                <Menu icon={<PlusIcon className='h-full' />} title='Create' click={() => setCreate(true)} />
                <Menu icon={<img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
                className='h-full aspect-square rounded-full border border-slate-200 p-px' />} title='Profile' />
            </div>
            <Menu icon={<Bars3Icon className='h-full' />} title='More' click={() => setMore(true)} />
        </div>
    )
}