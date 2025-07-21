import { IndragramContext } from '../store/context';
import { useContext } from 'react';

export default function Postmenu() {
    const {state, dispatch} = useContext(IndragramContext)

    const Menu = ({name, red, click}) => {
        return (
            <h1 className={`${red && 'text-red-500 font-semibold'} text-sm border-b border-slate-200 last:border-b-0 text-center p-3.5 hover:bg-slate-100 cursor-pointer`} onClick={click}>{name}</h1>
        )
    }

    return (
        <div onClick={() => dispatch({type: 'CHANGE_MODAL', modal: null})}
        className={`${state.modal != 'postmenu' && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal p-3.5`}>
            <div className="w-full max-w-sm mx-auto grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <Menu name='Report' red />
                <Menu name='Unfollow' red />
                <Menu name='Add to favorites' />
                <Menu name='Go to post' />
                <Menu name='Share to...' />
                <Menu name='Copy link' />
                <Menu name='Embed' />
                <Menu name='About this account' />
                <Menu name='Cancel' click={() => dispatch({type: 'CHANGE_MODAL', modal: null})} />
            </div>
        </div>
    )
}