import { HiOutlineBars3, HiOutlineMagnifyingGlass, HiOutlineHeart, HiOutlinePlus,
HiBars3, HiMagnifyingGlass, HiHeart, HiPlus} from 'react-icons/hi2'
import { useContext } from 'react'
import { IndragramContext } from '../store/context'

export default function Topbar() {
    const {state, dispatch} = useContext(IndragramContext)

    return (
        <div className="md:hidden bg-[#fff] h-[50px] flex items-center gap-x-4 border-b border-slate-200 p-3.5 fixed top-0 w-full z-10">
            {state.modal === 'more' ? 
                <HiBars3 className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'more'})} />
            :
                <HiOutlineBars3 className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'more'})} />
            }
            <h1 className="font-logo text-xl font-semibold grow">Indragram</h1>
            {state.modal === 'search' ? 
                <HiMagnifyingGlass className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'search'})} />
            :
                <HiOutlineMagnifyingGlass className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'search'})} />
            }
            {state.modal === 'notifications' ? 
                <HiHeart className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'notifications'})} />
            :
                <HiOutlineHeart className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'notifications'})} />
            }
            {state.modal === 'create' ? 
                <HiPlus className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'create'})} />
            :
                <HiOutlinePlus className='text-2xl active:text-[23px] active:text-slate-500 active:ml-px' 
                onClick={() => dispatch({type: 'CHANGE_MODAL', modal: 'create'})} />
            }
        </div>
    )
}