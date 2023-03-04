import { useSession } from 'next-auth/react'

export default function Story() {
    const {data: session} = useSession()
    const data = [
        {name: 'profile_satu', see: false},
        {name: 'profile_dua', see: false},
        {name: 'profile_tiga', see: false},
        {name: 'profile_empat', see: false},
        {name: 'profile_lima', see: true},
        {name: 'profile_enam', see: true},
        {name: 'profile_tujuh', see: true},
        {name: 'profile_delapan', see: true},
        {name: 'profile_sembilan', see: true},
        {name: 'profile_sepuluh', see: true},
        {name: 'profile_sebelas', see: true},
    ]

    // const scroll = (scrollOffset) => {
    //     story.current.scrollLeft += scrollOffset;
    //   };
    
    // const slide = () => {
    //     story.current.scrollLeft > 0 ? setLeft(true) : setLeft(false)
    //     story.current.scrollLeft < story.current.scrollWidth - story.current.clientWidth ? setRight(true) : setRight(false)
    // }

    return (
        <div className='relative grid bg-[#fff] -mb-px pb-5'>
            <div className="overflow-x-auto flex gap-x-4 max-[470px]:px-3.5 slider">
                {data.map(item =>
                <div>
                    <div className='grid gap-y-1.5 w-16 cursor-pointer'>
                    <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
                    className={`rounded-full aspect-square w-full p-0.5 border-2 ${item.see && 'border-slate-200'} border-blue-500`} />
                    <h1 className='text-xs text-center truncate'>{item.name}</h1>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}