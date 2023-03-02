import { XMarkIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useRef } from 'react'

export default function Search({search, setSearch}) {
    const {data: session} = useSession()
    const input = useRef()

    useEffect(() => {
        search && input.current.focus()
    }, [search])

    const User = ({username, name}) => {
        return (
            <div className="flex items-center gap-x-3 py-1.5 px-3.5 hover:bg-slate-100 cursor-pointer">
                <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
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
        <div onClick={() => setSearch(false)}
        className={`${!search && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid gap-y-px bg-slate-200 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h1 className='bg-[#fff] text-center font-medium p-2.5'>Search</h1>
                    <div>
                        <div className='bg-[#fff] py-2.5 px-3.5'>
                            <input type='text' placeholder='Search' ref={input}
                            className='w-full outline-none bg-slate-100 py-1.5 px-2.5 rounded-md' />
                        </div>
                        <div className='bg-[#fff] grid content-start pb-2.5 aspect-square'>
                            <h1 className="text-sm font-semibold px-3.5 pb-2 flex justify-between items-center">Recent <span className='text-xs text-blue-500 cursor-pointer'>Clear all</span></h1>
                            <User username='profile_1' name='Test Satu' />
                            <User username='profile_2' name='Test Dua' />
                            <User username='profile_3' name='Test Tiga' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}