export default function Suggest({item}) {
    return (
      <div className='flex gap-x-3 items-center py-2'>
        <img src={item.image} alt='avatar' referrerPolicy='no-referrer' 
        className='rounded-full aspect-square h-8 border border-slate-200 cursor-pointer' />
        <div className='grid grow'>
          <h1 className='text-sm font-semibold cursor-pointer truncate -mt-1'>{item.username}</h1>
          <h1 className='text-xs text-slate-500 truncate'>
            {item.desc.length < 1 ? 'Suggested for you' : `Followed by ${item.desc[0]} ${item.desc.length > 1 ? `+ ${item.desc.length -1} more` : []}`}
          </h1>
        </div>
        <h1 className='text-xs font-semibold text-blue-500 cursor-pointer'>Follow</h1>
      </div>
    )
  }