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
            <div className="grid items-center py-5 px-3.5 md:py-9 md:px-8 w-full h-full">
                <div className='w-full max-w-xs grid gap-y-2 mx-auto'>
                    <h1 className='text-3xl text-center font-medium font-logo mb-9'>Indragram</h1>
                    <h1 className='text-sm font-bold text-slate-500'>Email or Username</h1>
                    <input type='text' className='rounded-lg outline-none border border-slate-300 focus:border-sky-500 py-2 px-3 w-full' />
                    <h1 className='text-sm font-bold text-slate-500 mt-3'>Password</h1>
                    <input type='password' className='rounded-lg outline-none border border-slate-300 focus:border-sky-500 py-2 px-3 w-full' />
                    <h1 className='py-2 px-3 bg-sky-500 text-center text-slate-50 font-medium rounded-md cursor-pointer mt-3'>Sign in</h1>
                    <div className='my-5 flex items-center gap-x-2'>
                        <hr className='border-slate-300 w-full' />
                        <h1 className='text-sm font-bold text-slate-500 px-1'>OR</h1>
                        <hr className='border-slate-300 w-full' />
                    </div>
                    <h1 onClick={() => signIn('google')}
                    className='font-medium text-slate-500 py-2 px-3 rounded-lg border border-slate-300 cursor-pointer hover:bg-slate-50 flex justify-center items-center gap-x-3'>
                        <img src='/google.svg' alt='Google' className='h-5' />Google
                    </h1>
                </div>
            </div>
        </Layout>
    )
}