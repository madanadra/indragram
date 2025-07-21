import { useContext, useEffect, useRef, useState } from 'react'
import { HiEllipsisHorizontal, HiOutlineHeart, HiOutlineChatBubbleLeft, HiOutlinePaperAirplane,
HiOutlineBookmark, HiMusicalNote, HiSpeakerWave, HiSpeakerXMark, HiPlay} from "react-icons/hi2";
import { IndragramContext } from '../store/context';

export default function Reelsvid({curr, item}) {
    const {state, dispatch} = useContext(IndragramContext)
    const vid = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [trunc, setTrunc] = useState(true)

    useEffect(() => {
        vidControl()
    }, [curr])

    const vidControl = () => {
        if (curr) {
            if (playing) {
                vid.current?.pause()
                setPlaying(false)
            } else {
                vid.current?.play()
                setPlaying(true)
            }
        } else {
            vid.current?.pause()
            setPlaying(false)
        }
    }

    return (
        <div className='relative mx-auto snap-always snap-center cursor-pointer shadow-2xl text-slate-50'>
            {state.audio 
            ?   <HiSpeakerWave className='z-10 text-3xl absolute top-4 right-4 bg-slate-50 bg-opacity-20 p-2 rounded-full'
                onClick={() => dispatch({type: 'SWITCH_AUDIO', audio: false})} /> 
            :   <HiSpeakerXMark className='z-10 text-3xl absolute top-4 right-4 bg-slate-50 bg-opacity-20 p-2 rounded-full'
                onClick={() => dispatch({type: 'SWITCH_AUDIO', audio: true})} />
            }
            <div className={`${playing && 'hidden'} absolute grid place-content-center inset-0`}>
                <HiPlay className='text-7xl bg-slate-50 bg-opacity-20 p-5 rounded-full' />
            </div>
            <video ref={vid} loop muted={!state.audio} onClick={() => vidControl()}
            className='rounded h-[calc(100vh-100px)] md:h-[calc(100vh-80px)] aspect-[9/16] object-contain object-center bg-[#000]'>
                <source src={item.reels} type="video/mp4" />
            </video>
            <div className='flex items-end gap-x-2 absolute inset-x-0 bottom-0 p-4 pointer-events-none'>
                <div className='grid grow gap-y-2 overflow-hidden'>
                    <div className='flex gap-x-3 items-center'>
                        <img src={item.image} alt='User Photo' 
                        className='rounded-full w-8 aspect-square' />
                        <h1 className='font-semibold text-sm truncate'>{item.username}</h1>
                        <span className='-mx-1.5'>&bull;</span>
                        <h1 className='font-semibold text-sm'>
                            Follow
                        </h1>
                    </div>
                    <h1 className={`text-sm ${trunc && 'truncate'} pointer-events-auto`} onClick={() => setTrunc(!trunc)}>{item.caption}</h1>
                    <div className='flex gap-x-1 items-center'>
                        <div><HiMusicalNote /></div>
                        <div className='grid'>
                            <h1 className='text-sm truncate'>{item.audio ? item.audio.title : item.username} &middot; {item.audio ? item.audio.artist : 'Original audio'}</h1>
                        </div>
                    </div>
                </div>
                <div className='grid gap-y-3 justify-items-center'>
                    <div className='grid gap-y-1 justify-items-center cursor-pointer hover:text-slate-500'>
                        <HiOutlineHeart className='text-2xl' />
                        <h1 className='text-xs'>150K</h1>
                    </div>
                    <div className='grid gap-y-1 justify-items-center cursor-pointer hover:text-slate-500'>
                        <HiOutlineChatBubbleLeft className='text-2xl' />
                        <h1 className='text-xs'>999</h1>
                    </div>
                    <HiOutlinePaperAirplane className='text-2xl cursor-pointer hover:text-slate-500' />
                    <HiOutlineBookmark className='text-2xl cursor-pointer hover:text-slate-500' />
                    <HiEllipsisHorizontal className='text-2xl cursor-pointer hover:text-slate-500' />
                    <img src={item.audio ? item.audio.album :  item.image} alt='User Photo' 
                    className='rounded w-6 aspect-square cursor-pointer hover:brightness-200' />
                </div>
            </div>
        </div>
        )
}