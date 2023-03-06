import { useSession } from 'next-auth/react'

export default function Suggest({item}) {
    const {data: session} = useSession()
    
    return (
      <div className='flex gap-x-3 items-center py-2'>
        <img src={session.user.image} alt='avatar' referrerPolicy='no-referrer' 
        className='rounded-full h-8 border border-slate-200 cursor-pointer' />
        <div className='grid gap-y-1.5 grow'>
          <h1 className='text-sm font-semibold cursor-pointer truncate leading-none'>{item.name}</h1>
          <h1 className='text-xs text-slate-500 truncate leading-none'>
            {item.sfy ? 'Suggested for you' : `Followed by ${item.desc[0]} ${item.desc.length > 1 ? `+ ${item.desc.length -1} more` : []}`}
          </h1>
        </div>
        <h1 className='text-xs font-semibold text-blue-500 cursor-pointer'>Follow</h1>
      </div>
    )
  }