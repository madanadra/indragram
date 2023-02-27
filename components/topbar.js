import { Bars3Icon, HeartIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Topbar({setMore, setCreate, setNotifications, setSearch}) {
    return (
        <div className="md:hidden bg-[#fff] h-[50px] flex items-center gap-x-4 border-b border-slate-200 p-3.5 fixed top-0 w-full">
            <Bars3Icon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' onClick={() => setMore(true)} />
            <h1 className="font-logo text-xl font-semibold grow">Indragram</h1>
            <MagnifyingGlassIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' onClick={() => setSearch(true)} />
            <HeartIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' onClick={() => setNotifications(true)} />
            <PlusIcon className='h-6 hover:h-[23px] hover:text-slate-500 hover:ml-px' onClick={() => setCreate(true)} />
        </div>
    )
}