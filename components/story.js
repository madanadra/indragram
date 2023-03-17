import { useContext, useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { IndragramContext } from '../store/context';

export default function Story() {
    const {state} = useContext(IndragramContext)
    const story = useRef(0)
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
        <div className='relative grid pb-1.5'>
            <div className={`${!left && 'hidden'} absolute h-16 top-0 left-3.5 grid place-content-center pointer-events-none`}>
                <HiChevronLeft onClick={() => scroll(- story.current.clientWidth / 2)}
                className='text-[28px] rounded-full p-1.5 bg-slate-100 bg-opacity-50 hover:text-blue-500 cursor-pointer pointer-events-auto text-slate-700 shadow' />
            </div>
            <div className={`${!right && 'hidden'} absolute h-16 top-0 right-3.5 grid place-content-center pointer-events-none`}>
                <HiChevronRight onClick={() => scroll(story.current.clientWidth / 2)}
                className='text-[28px] rounded-full p-1.5 bg-slate-100 bg-opacity-50 hover:text-blue-500 cursor-pointer pointer-events-auto text-slate-700 shadow' />
            </div>
            <div ref={story} onScroll={() => slide()} className="overflow-x-auto flex gap-x-4 max-[470px]:px-3.5 slider">
                {state.story.sort((x, y) => x.see - y.see).map((item, i) =>
                <div key={i}>
                    <div className='grid gap-y-1.5 w-16 cursor-pointer'>
                        <img src={item.image} alt='Avatar' referrerPolicy="no-referrer"
                        className={`rounded-full aspect-square w-full p-0.5 border-2 ${item.see && 'border-slate-200'} border-blue-500`} />
                        <h1 className='text-xs text-center truncate'>{item.username}</h1>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}