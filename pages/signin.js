import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Layout from "../components/layout";

export default function Signin() {
    const {data: session} = useSession()
    const router = useRouter()

    useEffect(() => {
        session &&
        router.push('/')
    }, [session]);

    return (
        !session &&
        <Layout title='Sign in'>
            <div className="grow grid place-content-center p-3.5 pb-[50px] w-screen h-screen">
                <div className='text-center grid justify-items-center gap-y-3'>
                    <h1 className='text-3xl font-medium font-logo mb-3'>Indragram</h1>
                    <h1 onClick={() => signIn('google')}
                    className='py-2 px-5 bg-sky-500 text-slate-50 font-medium rounded-md cursor-pointer w-max'>Sign in</h1>
                </div>
            </div>
        </Layout>
    )
}