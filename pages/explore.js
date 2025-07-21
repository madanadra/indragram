import Layout from "../components/layout";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from "react";
import { IndragramContext } from "../store/context";
import Gridbox from "../components/gridbox";

export default function Explore() {
    const {status} = useSession()
    const router = useRouter()
    const {state} = useContext(IndragramContext)

    useEffect(() => {
        status === 'unauthenticated' &&
        router.push('/signin')
    }, [status])

    return (
        status === 'authenticated' &&
        <Layout title='Explore'>
                <div className="grow max-w-[910px] mx-auto py-[50px] md:py-10 md:px-7 grid grid-cols-3 gap-px md:gap-5">
                    {[...state.post, ...state.post, ...state.post].map((item, i) => 
                        <Gridbox key={i} item={item} />
                    )}
                </div>
        </Layout>
    )
}