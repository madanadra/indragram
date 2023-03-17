import Layout from "../components/layout";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from "react";
import { IndragramContext } from "../store/context";
import { HiSquare2Stack } from "react-icons/hi2";

export default function Explore() {
    const {status} = useSession()
    const router = useRouter()
    const {state} = useContext(IndragramContext)

    useEffect(() => {
        status === 'unauthenticated' &&
        router.push('/signin')
    })

    return (
        status === 'authenticated' &&
        <Layout title='Explore'>
                <div className="grow max-w-[910px] mx-auto py-[50px] md:py-10 md:px-7 grid grid-cols-3 gap-px md:gap-5">
                    {[...state.post, ...state.post, ...state.post].map((item, i) => 
                        <div key={i} className='aspect-square relative cursor-pointer'>
                            <img src={item.asset[0]} alt='Post' className="w-full h-full object-cover object-center" />
                            <HiSquare2Stack className={`${item.asset.length <= 1 && 'hidden'} absolute top-[5%] right-[5%] text-xl md:text-2xl text-slate-50 rotate-180 shadow`} />
                        </div>
                    )}
                </div>
        </Layout>
    )
}