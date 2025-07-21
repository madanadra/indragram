import { HiXMark } from 'react-icons/hi2'
import { useEffect, useRef } from 'react'
import { IndragramContext } from '../store/context'
import { useContext } from 'react'
import { user } from '../store/reducer'

export default function Search() {
    const {state, dispatch} = useContext(IndragramContext)
    const input = useRef()

    useEffect(() => {
        state.modal === 'search' && input.current.focus()
    }, [state.modal])

    const User = ({image, username, name}) => {
        return (
            <div className="flex items-center gap-x-3 py-1.5 px-3.5 hover:bg-slate-100 cursor-pointer">
                <img src={image} alt='Avatar' referrerPolicy="no-referrer" 
                className='h-11 aspect-square rounded-full border border-slate-200' />
                <div className='grow grid content-center gap-y-px text-sm'>
                    <h1 className='font-semibold'>{username}</h1>
                    <h1 className='text-slate-500'>{name}</h1>
                </div>
                <HiXMark className='h-5 text-slate-500' />
            </div>
        )
    }

    return (
        <div onClick={() => dispatch({type: 'CHANGE_MODAL', modal: null})}
        className={`${state.modal != 'search' && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal p-3.5`}>
            <div className="h-96 w-full max-w-sm mx-auto grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <h1 className='text-center font-semibold p-2.5 border-b border-slate-200'>Search</h1>
                <div className='py-2.5 px-3.5'>
                    <input type='text' placeholder='Search' ref={input}
                    className='w-full outline-none bg-slate-100 py-1.5 px-2.5 rounded-md' />
                </div>
                <div className='grid content-start pb-2.5'>
                    <div className='flex justify-between items-center px-3.5 pb-2'>
                        <h1 className="font-semibold">Recent</h1>
                        <h1 className='text-blue-500 cursor-pointer'>Clear all</h1>
                    </div>
                    {user.filter((_, i) => i <= 3).map((item, i) => 
                        <User key={i} image={item.image} username={item.username} name={item.name} />
                    )}
                </div>
            </div>
        </div>
    )
}