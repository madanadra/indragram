import { Bars3Icon, HeartIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { IndragramContext } from '../store/context'

export default function Topbar() {
    const {state, dispatch} = useContext(IndragramContext)

    return (
        <div className="md:hidden bg-[#fff] h-[50px] flex items-center gap-x-4 border-b border-slate-200 p-3.5 fixed top-0 w-full z-10">
            <Bars3Icon className={`h-6 active:h-[23px] active:text-slate-500 active:ml-px
            ${state.modal === 'more' && 'text-blue-500'}`} 
            onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'more'})} />
            <h1 className="font-logo text-xl font-semibold grow">Indragram</h1>
            <MagnifyingGlassIcon className={`h-6 active:h-[23px] active:text-slate-500 active:ml-px
            ${state.modal === 'search' && 'text-blue-500'}`} 
            onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'search'})} />
            <HeartIcon className={`h-6 active:h-[23px] active:text-slate-500 active:ml-px
            ${state.modal === 'notifications' && 'text-blue-500'}`} 
            onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'notifications'})} />
            <PlusIcon className={`h-6 active:h-[23px] active:text-slate-500 active:ml-px
            ${state.modal === 'create' && 'text-blue-500'}`} 
            onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'create'})} />
        </div>
    )
}