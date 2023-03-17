import { IndragramContext } from '../store/context'
import { useContext } from 'react'
import { user } from '../store/reducer'

export default function Notifications() {
    const {state, dispatch} = useContext(IndragramContext)

    const User = ({image, username, time, follow}) => {
        return (
            <div className="flex items-center gap-x-3 py-1.5 px-3.5 hover:bg-slate-100 cursor-pointer">
                <img src={image} alt='Avatar' referrerPolicy="no-referrer" 
                className='h-11 aspect-square rounded-full border border-slate-200' />
                <h1 className='text-sm grow'><span className='font-medium'>{username}</span> started following you. <span className='text-slate-500'>{time}</span></h1>
                <h1 className={`${follow ? 'bg-slate-200 hover:bg-slate-300' : 'bg-blue-500 hover:bg-blue-600 text-slate-50'} text-xs font-semibold rounded-md py-1.5 px-3.5 cursor-pointer`}>
                    {follow ? 'Following' : 'Follow'}
                </h1>
            </div>
        )
    }

    return (
        <div onClick={() => dispatch({type: 'CHANGE_MODAL', modal: null})}
        className={`${state.modal != 'notifications' && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h1 className='text-center font-medium p-2.5 border-b border-slate-200'>Notifications</h1>
                    <div className='grid content-start py-2.5 aspect-square'>
                        <h1 className="text-sm font-semibold px-3.5 pb-2">Earlier</h1>
                        {user.filter((_, i) => i <= 3).map((item, i) => 
                            <User key={i} image={item.image} username={item.username} time={`${i+1}h`} follow={i === 2 && true} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}