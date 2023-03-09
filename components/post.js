import { useSession } from 'next-auth/react'
import { BookmarkIcon, ChatBubbleBottomCenterIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon, 
FaceSmileIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import Postmenu from './postmenu';

export default function Post({item}) {
    const {data: session} = useSession()
    const post = useRef(0)
    const [curr, setCurr] = useState(0)
    const [postmenu, setPostmenu] = useState(false)

    useEffect(() => {
        slide()
    }, [])

    const scroll = (scrollOffset) => {
        post.current.scrollLeft += scrollOffset;
    }

    const slide = () => {
        setCurr(Math.round(post.current.scrollLeft / post.current.clientWidth))
    }

    return (
        <div className='grid gap-y-2 py-3.5 max-[470px]:px-3.5 border-b border-slate-200 last:border-b-0'>
            <div className='flex items-center gap-x-3'>
                <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
                className='rounded-full aspect-square h-8 border border-slate-200 cursor-pointer' />
                <div className='grow flex items-center gap-x-1 text-sm'>
                    <h1 className=' font-semibold cursor-pointer hover:text-slate-500'>{item.name}</h1>
                    <h1 className='text-slate-500'>&bull; {item.time}</h1>
                </div>
                <EllipsisHorizontalIcon className='w-7 cursor-pointer hover:text-slate-500' onClick={() => setPostmenu(true)} />
            </div>
            <div className='relative max-[470px]:-mx-3.5'> 
                <div className={`${curr === 0 && 'hidden'} absolute inset-y-0 left-3.5 grid place-content-center`}>
                    <ChevronLeftIcon onClick={() => scroll(- post.current.clientWidth)}
                    className='h-7 rounded-full p-1.5 bg-slate-100 bg-opacity-50 hover:text-blue-500 cursor-pointer text-slate-500' />
                </div>
                <div className={`${curr === item.asset.length-1 && 'hidden'} absolute inset-y-0 right-3.5 grid place-content-center`}>
                    <ChevronRightIcon onClick={() => scroll(post.current.clientWidth)}
                    className='h-7 rounded-full p-1.5 bg-slate-100 bg-opacity-50 hover:text-blue-500 cursor-pointer text-slate-500' />
                </div>
                <div ref={post} onScroll={() => slide()} className='overflow-x-auto rounded flex snap-x snap-mandatory slider'>
                    {item.asset.map((as, i) => 
                        <img key={i} alt='post' className='w-full aspect-square object-cover object-center snap-always snap-center' src={as} />    
                    )}
                </div>
                <div className={`${item.asset.length <= 1 && 'hidden'} absolute bottom-3.5 inset-x-0 flex justify-center pointer-events-none`}>
                    {item.asset.map((_, i) => 
                        <span key={i} className={`leading-none ${curr === i ? 'text-blue-500' : 'text-slate-100 text-opacity-50'}`}>&bull;</span>
                    )}
                </div>
            </div>
            <div className='flex justify-between gap-x-3.5'>
            <div className='flex items-center gap-x-3.5'>
                <HeartIcon className='h-7 cursor-pointer hover:text-slate-500' />
                <ChatBubbleBottomCenterIcon className='h-7 cursor-pointer hover:text-slate-500' />
                <PaperAirplaneIcon className='h-7 cursor-pointer hover:text-slate-500' />
            </div>
            <BookmarkIcon className='h-7 cursor-pointer hover:text-slate-500' />
            </div>
            <h1 className='text-sm font-semibold leading-none'>{item.like} likes</h1>
            <h1 className='text-sm  cursor-pointer font-semibold -my-1'>
                {item.name}
                <span className='font-normal cursor-text'> {item.caption}</span>
            </h1>
            <h1 className='cursor-pointer text-sm text-slate-500 w-max'>View all {item.comment} comments</h1>
            <div className='relative -my-1'>
                <input type='text' placeholder='Add a comment...' className='w-full outline-0 text-sm pr-5' />
                <FaceSmileIcon className='h-3.5 text-slate-500 absolute right-0 top-1.5 cursor-pointer' />
            </div>
            <Postmenu postmenu={postmenu} setPostmenu={setPostmenu} />
        </div>
    )
} 