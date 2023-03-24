import { useSession } from 'next-auth/react'
import { HiOutlineHome, HiOutlineMap, HiOutlineFilm, HiOutlineChatBubbleLeft,
HiHome, HiMap, HiFilm, HiChatBubbleLeft } from 'react-icons/hi2'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { IndragramContext } from '../store/context'

export default function Bottombar() {
    const {data: session} = useSession()
    const router = useRouter()
    const {state, dispatch} = useContext(IndragramContext)

    return (
        <div className="md:hidden bg-[#fff] h-[50px] flex items-center justify-around border-t border-slate-200 fixed bottom-0 w-full z-10">
            {!state.modal && router.pathname === '/' ?
                <HiHome className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px'
                onClick={() => router.push('/')} /> 
            :
                <HiOutlineHome className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px'
                onClick={() => router.push('/')} />
            }
            {!state.modal && router.pathname === '/explore' ?
                <HiMap className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px'
                onClick={() => router.push('/explore')} /> 
            :
                <HiOutlineMap className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px'
                onClick={() => router.push('/explore')} />
            }
            {!state.modal && router.pathname === '/reels' ?
                <HiFilm className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px'
                onClick={() => router.push('/reels')} />
            :
                <HiOutlineFilm className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px'
                onClick={() => router.push('/reels')} />
            }
            
            <HiOutlineChatBubbleLeft className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' />
            <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
            className='h-6 active:h-[23px] active:ml-px aspect-square rounded-full border border-slate-400 p-px' />
        </div>
    )
}