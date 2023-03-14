import { PhotoIcon, PlayIcon } from '@heroicons/react/24/outline'
import { IndragramContext } from '../store/context'
import { useContext } from 'react'

export default function Create() {
    const {state, dispatch} = useContext(IndragramContext)

    return (
        <div onClick={() => dispatch({type: 'CHANGE_MODAL', modal: null})}
        className={`${state.modal != 'create' && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h1 className='text-center font-medium p-2.5 border-b border-slate-200'>Create new post</h1>
                    <div className='grid justify-items-center content-center gap-y-5 p-2.5 aspect-square'>
                        <div className='relative h-20 w-24'>
                            <PlayIcon className='absolute h-14 bg-[#fff] text-slate-900 -rotate-6 top-0 left-0 px-1 rounded-lg border-[3px] border-slate-900' />
                            <PhotoIcon className='absolute bg-[#fff] h-14 text-slate-900 rotate-6 bottom-0 right-0 px-1 rounded-lg' />
                        </div>
                        <h1 className='text-xl font-light'>Drag photos and videos here</h1>
                        <h1 className='text-sm bg-blue-500 rounded-md py-1.5 px-3.5 text-slate-50 cursor-pointer'>Select from computer</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}