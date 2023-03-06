import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Story() {
    const {data: session} = useSession()
    const data = [
        {name: 'profile_satu', see: false},
        {name: 'profile_dua', see: false},
        {name: 'profile_tiga', see: false},
        {name: 'profile_empat', see: false},
        {name: 'profile_lima', see: true},
        {name: 'profile_enam', see: true},
        {name: 'profile_tujuh', see: true},
        {name: 'profile_delapan', see: true},
        {name: 'profile_sembilan', see: true},
        {name: 'profile_sepuluh', see: true},
        {name: 'profile_sebelas', see: true},
    ]
    const story = useRef()
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

    useEffect(() => {
        slide()
    }, [])

    const scroll = (scrollOffset) => {
        story.current.scrollLeft += scrollOffset;
      };
    
    const slide = () => {
        story.current.scrollLeft > 0 ? setLeft(true) : setLeft(false)
        story.current.scrollLeft < story.current.scrollWidth - story.current.clientWidth ? setRight(true) : setRight(false)
    }

    return (
        <div className='relative grid pb-5'>
            <div className={`${!left && 'hidden'} absolute top-0 bottom-5 left-3.5 grid place-content-center`}>
                <ChevronLeftIcon onClick={() => scroll(-story.current.clientWidth)}
                className='h-7 rounded-full p-1.5 bg-slate-200 hover:text-blue-500 cursor-pointer' />
            </div>
            <div className={`${!right && 'hidden'} absolute top-0 bottom-5 right-3.5 grid place-content-center`}>
                <ChevronRightIcon onClick={() => scroll(story.current.clientWidth)}
                className='h-7 rounded-full p-1.5 bg-slate-200 hover:text-blue-500 cursor-pointer' />
            </div>
            <div ref={story} onScroll={() => slide()} className="overflow-x-auto flex gap-x-4 max-[470px]:px-3.5 slider">
                {data.map((item, i) =>
                <div key={i}>
                    <div className='grid gap-y-1.5 w-16 cursor-pointer'>
                    <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
                    className={`rounded-full aspect-square w-full p-0.5 border-2 ${item.see && 'border-slate-200'} border-blue-500`} />
                    <h1 className='text-xs text-center truncate'>{item.name}</h1>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}