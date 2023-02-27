import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Layout from "../components/layout";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Signin() {
    const {data: session} = useSession()
    const router = useRouter()
    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        session &&
        router.push('/')
    }, [session]);

    return (
        !session &&
        <Layout title='Sign in'>
            <div className="grid gap-y-5 py-5 px-3.5 md:py-9 md:px-8 w-full max-w-sm mx-auto">
                <h1 className='text-3xl text-center font-medium font-logo mb-8 leading-none'>Indragram</h1>
                <div className='grid gap-y-3.5 rounded-lg border border-slate-200 bg-slate-100 p-3.5'>
                    <div className='relative'>
                        <input type='text' id='username' placeholder=' ' 
                        className='pt-5 pb-2 px-2.5 border border-slate-200 focus:border-blue-500 bg-[#fff] 
                        rounded-md w-full peer leading-none outline-none' />
                        <label for='username' 
                        className='text-slate-500 leading-none top-2 text-xs 
                        peer-focus:leading-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                        duration-75 absolute inset-x-2.5 pointer-events-none'>Username or email</label>
                    </div>
                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} id='password' placeholder=' ' 
                        className='pt-5 pb-2 px-2.5 border border-slate-200 focus:border-blue-500 bg-[#fff] 
                        rounded-md w-full peer leading-none outline-none' />
                        <label for='password' 
                        className='text-slate-500 leading-none top-2 text-xs 
                        peer-focus:leading-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                        duration-75 absolute inset-x-2.5 pointer-events-none'>Password</label>
                        <div className='absolute inset-y-0 right-0 grid place-content-center aspect-square pointer-events-none'>
                            <div onClick={() => setShowPass(!showPass)}
                            className='p-1.5 rounded-full aspect-square pointer-events-auto cursor-pointer hover:bg-slate-100'>
                                {showPass 
                                ? <EyeIcon className='h-4 text-slate-500' />
                                : <EyeSlashIcon className='h-4 text-slate-500' />
                                }
                            </div>
                        </div>
                    </div>
                    <h1 className='py-2 px-3 bg-blue-500 text-center text-slate-50 text-sm font-bold rounded-full cursor-pointer my-1.5'>Sign in</h1>
                    <h1 className='text-xs font-semibold text-blue-500 w-max mx-auto cursor-pointer leading-none'>Forgot password?</h1>
                </div>
                <div className='flex items-center gap-x-2'>
                    <hr className='border-slate-200 w-full' />
                    <h1 className='text-sm font-bold text-slate-500 px-1'>or</h1>
                    <hr className='border-slate-200 w-full' />
                </div>
                <h1 onClick={() => signIn('google')}
                className='text-slate-500 py-2 px-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 flex justify-center items-center gap-x-2'>
                    <img src='/google.svg' alt='Google' className='h-5' />Sign in with Google
                </h1>
                <h1 className='text-xs text-slate-500 text-center'>
                    Don&apos;t have an account? <span className='text-blue-500 cursor-pointer hover:underline'>Sign up</span>
                </h1>
                <div className='flex gap-x-3.5 text-blue-500 text-xs justify-center mt-12'>
                    <span className='cursor-pointer hover:underline'>Terms</span>
                    <span className='cursor-pointer hover:underline'>Privacy</span>
                    <span className='cursor-pointer hover:underline'>Security</span>
                    <span className='cursor-pointer hover:underline'>Contact</span>
                </div>
            </div>
        </Layout>
    )
}