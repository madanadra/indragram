import { XMarkIcon } from '@heroicons/react/24/outline'
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
                    <h1>{username}</h1>
                    <h1 className='text-slate-500'>{name}</h1>
                </div>
                <XMarkIcon className='h-5 text-slate-500' />
            </div>
        )
    }

    return (
        <div onClick={() => dispatch({type: 'CHANGE_MODAL', modal: null})}
        className={`${state.modal != 'search' && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h1 className='text-center font-medium p-2.5 border-b border-slate-200'>Search</h1>
                    <div className='aspect-square'>
                        <div className='py-2.5 px-3.5'>
                            <input type='text' placeholder='Search' ref={input}
                            className='w-full outline-none bg-slate-100 py-1.5 px-2.5 rounded-md' />
                        </div>
                        <div className='grid content-start pb-2.5'>
                            <h1 className="text-sm font-semibold px-3.5 pb-2 flex justify-between items-center">Recent <span className='text-xs text-blue-500 cursor-pointer'>Clear all</span></h1>
                            {user.filter((_, i) => i <= 3).map((item, i) => 
                                <User key={i} image={item.image} username={item.username} name={item.name} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}