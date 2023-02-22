import { useSession } from 'next-auth/react'
import { ChatBubbleBottomCenterIcon, FilmIcon, HomeIcon, MapIcon } from '@heroicons/react/24/outline'

export default function Bottombar() {
    const {data: session} = useSession()

    return (
        <div className="md:hidden bg-[#fff] h-[50px] flex items-center justify-around border-t border-slate-300 fixed bottom-0 w-full">
            <HomeIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' />
            <MapIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' />
            <FilmIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' />
            <ChatBubbleBottomCenterIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' />
            <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
            className='h-6 hover:h-[23px] hover:ml-px aspect-square rounded-full border border-slate-300 p-px' />
        </div>
    )
}