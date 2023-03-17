import { HiEllipsisHorizontal, HiChevronLeft, HiChevronRight, HiOutlineHeart, 
HiOutlineChatBubbleLeft, HiOutlinePaperAirplane, HiOutlineBookmark, HiOutlineFaceSmile } from "react-icons/hi2";
import { useContext, useEffect, useRef, useState } from 'react';
import { IndragramContext } from '../store/context';

export default function Post({item}) {
    const {dispatch} = useContext(IndragramContext)
    const post = useRef(0)
    const [curr, setCurr] = useState(0)

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
                <img src={item.image} alt='Avatar' referrerPolicy="no-referrer"
                className='rounded-full aspect-square h-8 border border-slate-200 cursor-pointer' />
                <div className='grow flex items-center gap-x-1 text-sm'>
                    <h1 className=' font-semibold cursor-pointer hover:text-slate-500'>{item.username}</h1>
                    <h1 className='text-slate-500'>&bull; {item.time}</h1>
                </div>
                <HiEllipsisHorizontal className='text-[28px] cursor-pointer hover:text-slate-500' onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'postmenu'})} />
            </div>
            <div className='relative max-[470px]:-mx-3.5'> 
                <div className={`${curr === 0 && 'hidden'} absolute inset-y-0 left-3.5 grid place-content-center`}>
                    <HiChevronLeft onClick={() => scroll(- post.current.clientWidth)}
                    className='text-[28px] rounded-full p-1.5 bg-slate-100 bg-opacity-50 hover:text-blue-500 cursor-pointer text-slate-700 shadow' />
                </div>
                <div className={`${curr === item.asset.length - 1 && 'hidden'} absolute inset-y-0 right-3.5 grid place-content-center`}>
                    <HiChevronRight onClick={() => scroll(post.current.clientWidth)}
                    className='text-[28px] rounded-full p-1.5 bg-slate-100 bg-opacity-50 hover:text-blue-500 cursor-pointer text-slate-700 shadow' />
                </div>
                <div ref={post} onScroll={() => slide()} className='overflow-x-auto rounded flex snap-x snap-mandatory slider'>
                    {item.asset.map((as, i) => 
                        <img key={i} alt='post' className='w-full aspect-square object-cover object-center snap-always snap-center' src={as} />    
                    )}
                </div>
                <div className={`${item.asset.length <= 1 && 'hidden'} absolute bottom-3.5 inset-x-0 flex justify-center pointer-events-none`}>
                    {item.asset.map((_, i) => 
                        <span key={i} className={`leading-none shadow ${curr === i ? 'text-blue-500' : 'text-slate-100 text-opacity-50'}`}>&bull;</span>
                    )}
                </div>
            </div>
            <div className='flex justify-between gap-x-3.5'>
                <div className='flex items-center gap-x-3.5'>
                    <HiOutlineHeart className='text-[28px] font-bold cursor-pointer hover:text-slate-500' />
                    <HiOutlineChatBubbleLeft className='text-[28px] cursor-pointer hover:text-slate-500' />
                    <HiOutlinePaperAirplane className='text-[28px] cursor-pointer hover:text-slate-500' />
                </div>
                <HiOutlineBookmark className='text-[28px] cursor-pointer hover:text-slate-500' />
            </div>
            <h1 className='text-sm font-semibold leading-none'>{item.like.toLocaleString()} likes</h1>
            <h1 className='text-sm  cursor-pointer font-semibold -my-1'>
                {item.username}
                <span className='font-normal cursor-text'> {item.caption}</span>
            </h1>
            <h1 className='cursor-pointer text-sm text-slate-500 w-max'>View all {item.comment.toLocaleString()} comments</h1>
            <div className='relative -my-1'>
                <input type='text' placeholder='Add a comment...' className='w-full outline-0 text-sm pr-5' />
                <HiOutlineFaceSmile className='text-sm text-slate-500 absolute right-0 top-1.5 cursor-pointer' />
            </div>
        </div>
    )
} 