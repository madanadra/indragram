import { useSession } from 'next-auth/react'
import { ChatBubbleBottomCenterIcon, FilmIcon, HomeIcon, MapIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { IndragramContext } from '../store/context'

export default function Bottombar() {
    const {data: session} = useSession()
    const router = useRouter()
    const {state, dispatch} = useContext(IndragramContext)

    return (
        <div className="md:hidden bg-[#fff] h-[50px] flex items-center justify-around border-t border-slate-200 fixed bottom-0 w-full z-10">
            <HomeIcon className={`h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px
            ${!state.modal && state.menu === 'home' && 'text-blue-500'}`} 
            onClick={() => {router.push('/'); dispatch({type: 'CHANGE_MENU', menu: 'home'})}} />
            <MapIcon className={`h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px
            ${!state.modal && state.menu === 'explore' && 'text-blue-500'}`} 
            onClick={() => {router.push('/explore'); dispatch({type: 'CHANGE_MENU', menu: 'explore'})}} />
            <FilmIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' />
            <ChatBubbleBottomCenterIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' />
            <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
            className='h-6 hover:h-[23px] hover:ml-px aspect-square rounded-full border border-slate-200 p-px' />
        </div>
    )
}