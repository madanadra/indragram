import { signOut } from 'next-auth/react'
import { IndragramContext } from '../store/context'
import { useContext } from 'react'

export default function More() {
    const {state, dispatch} = useContext(IndragramContext)

    const Menu = ({name, click}) => {
        return (
            <h1 className="font-light border-b border-slate-200 last:border-b-0 text-center p-3.5 hover:bg-slate-100 cursor-pointer" onClick={click}>{name}</h1>
        )
    }

    return (
        <div onClick={() => dispatch({type: 'CHANGE_MODAL', modal: null})}
        className={`${state.modal != 'more' && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <Menu name='Settings' />
                    <Menu name='Your activity' />
                    <Menu name='Saved' />
                    <Menu name='Switch appearance' />
                    <Menu name='Report a problem' />
                    <Menu name='Switch accounts' />
                    <Menu name='Sign out' click={() => signOut()} />
                </div>
            </div>
        </div>
    )
}