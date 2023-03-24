import { HiFilm, HiSquare2Stack } from "react-icons/hi2";

export default function Gridbox({item}) {
    return (
        <div className='aspect-square relative cursor-pointer'>
            {'asset' in item ?
            <>
                <img src={item.asset[0]} alt='Post' className="w-full h-full object-cover object-center" />
                <HiSquare2Stack className={`${item.asset.length <= 1 && 'hidden'} absolute top-[5%] right-[5%] text-xl md:text-2xl text-slate-50 rotate-180 shadow`} />
            </> :
            <>
                <video className='w-full h-full object-cover object-center'>
                    <source src={item.reels} type="video/mp4" />
                </video>
                <HiFilm className="absolute top-[5%] right-[5%] text-xl md:text-2xl text-slate-50 shadow" />
            </>
            }
        </div>
    )
}