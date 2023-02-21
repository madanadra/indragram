import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Layout from "../components/layout";
import Bottombar from "../components/bottombar";
import Leftbar from "../components/leftbar";
import Topbar from "../components/topbar";

export default function Home() {
  const {data: session} = useSession()
  const router = useRouter()

  useEffect(() => {
    !session &&
    router.push('/signin')
  }, [session]);

  return (
    session &&
    <Layout title='Home'>
      <div className='flex flex-col md:flex-row relative'>
        <Leftbar />
        <Topbar />
        <div className="grow grid content-center justify-items-center text-center py-5 px-3.5 md:py-9 md:px-8 gap-y-3">
          <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
          className='h-52 aspect-square rounded-full border-2 border-slate-300 p-1 mb-2' />
          <h1 className='text-3xl font-medium'>{session.user.name}</h1>
          <h1 className='text-lg text-slate-500'>{session.user.email}</h1>
          <h1 onClick={() => signOut()}
          className='py-1 px-1.5 underline text-rose-500 font-medium cursor-pointer leading-none'>Sign out</h1>
        </div>
        <Bottombar />
      </div>
    </Layout>
  )
}
