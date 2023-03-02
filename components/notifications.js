import { useSession } from 'next-auth/react'

export default function Notifications({notifications, setNotifications}) {
    const {data: session} = useSession()

    const User = ({name, time, follow}) => {
        return (
            <div className="flex items-center gap-x-3 py-1.5 px-3.5 hover:bg-slate-100 cursor-pointer">
                <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer" 
                className='h-11 aspect-square rounded-full border border-slate-200' />
                <h1 className='text-sm grow'><span className='font-medium'>{name}</span> started following you. <span className='text-slate-500'>{time}</span></h1>
                <h1 className={`${follow ? 'bg-slate-200 hover:bg-slate-300' : 'bg-blue-500 hover:bg-blue-600 text-slate-50'} text-xs font-semibold rounded-md py-1.5 px-3.5 cursor-pointer`}>
                    {follow ? 'Following' : 'Follow'}
                </h1>
            </div>
        )
    }

    return (
        <div onClick={() => setNotifications(false)}
        className={`${!notifications && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid gap-y-px bg-slate-200 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h1 className='bg-[#fff] text-center font-medium p-2.5'>Notifications</h1>
                    <div className='bg-[#fff] grid content-start py-2.5 aspect-square'>
                        <h1 className="text-sm font-semibold px-3.5 pb-2">Earlier</h1>
                        <User name='profile_1' time='10h' follow />
                        <User name='profile_2' time='15h' />
                        <User name='profile_3' time='1w' follow />
                    </div>
                </div>
            </div>
        </div>
    )
}