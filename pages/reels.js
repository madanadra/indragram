import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState, useContext, useRef } from 'react'
import Layout from '../components/layout';
import { IndragramContext } from '../store/context';
import Reelsvid from '../components/reelsvid';

export default function Reels() {
    const {status} = useSession()
    const router = useRouter()
    const {state} = useContext(IndragramContext)
    const [curr, setCurr] = useState(0)
    const reels = useRef(0)

    useEffect(() => {
        status === 'unauthenticated' &&
        router.push('/signin')
    }, [status])

    const slide = () => {
        const value = Math.round(reels.current.scrollTop / reels.current.clientHeight)
        setCurr(value)
    }

    return (
        status === 'authenticated' &&
        <Layout title='Reels'>
            <div ref={reels} onScroll={() => slide()} className='grow grid gap-y-0 md:gap-y-5 py-[70px] md:py-10 h-screen overflow-y-auto snap-y snap-mandatory slider'>
                {state.post.filter(item => item.reels).map((item, i) => 
                    <Reelsvid key={i} curr={i === curr ? true : false} item={item} />
                )}
            </div>
        </Layout>
    )
}