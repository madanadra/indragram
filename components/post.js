import { useSession } from 'next-auth/react'
import { BookmarkIcon, ChatBubbleBottomCenterIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon, 
FaceSmileIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function Post({item}) {
    const {data: session} = useSession()

    return (
        <div className='grid gap-y-3 py-5 bg-[#fff]'>
            <div className='flex items-center gap-x-3 max-[470px]:px-3.5'>
            <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
            className='rounded-full aspect-square h-8 border border-slate-200 cursor-pointer' />
            <div className='grow flex items-center gap-x-1 text-sm'>
                <h1 className=' font-semibold cursor-pointer hover:text-slate-500'>{item.name}</h1>
                <h1 className='text-slate-500'>&bull; {item.time}</h1>
            </div>
            <EllipsisHorizontalIcon className='w-7 cursor-pointer hover:text-slate-500' />
            </div>
            <div className='overflow-x-auto rounded flex snap-mandatory snap-x slider'>
                {item.asset.map(as => 
                    <img alt='post' className='w-full h-auto snap-center' src={as} />    
                )}
            </div>
            <div className='flex justify-between gap-x-3.5 max-[470px]:px-3.5'>
            <div className='flex items-center gap-x-3.5'>
                <HeartIcon className='h-7 cursor-pointer hover:text-slate-500' />
                <ChatBubbleBottomCenterIcon className='h-7 cursor-pointer hover:text-slate-500' />
                <PaperAirplaneIcon className='h-7 cursor-pointer hover:text-slate-500' />
            </div>
            <BookmarkIcon className='h-7 cursor-pointer hover:text-slate-500' />
            </div>
            <h1 className='text-sm font-semibold leading-none max-[470px]:px-3.5'>{item.like} likes</h1>
            <h1 className='text-sm  cursor-pointer font-semibold max-[470px]:px-3.5'>
            {item.name}
            <span className='font-normal cursor-text'> {item.caption}</span>
            </h1>
            <h1 className='cursor-pointer text-sm text-slate-500 w-max max-[470px]:px-3.5'>View all {item.comment} comments</h1>
            <div className='relative -my-1 max-[470px]:px-3.5'>
            <input type='text' placeholder='Add a comment...' className='w-full outline-0 text-sm pr-5' />
            <FaceSmileIcon className='h-3.5 text-slate-500 absolute right-0 max-[470px]:right-3.5 top-1.5 cursor-pointer' />
            </div>
        </div>
    )
} 