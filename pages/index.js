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
      <div className='flex flex-col md:flex-row min-h-screen overflow-y-scroll'>
        <Leftbar />
        <Topbar />
        <div className="grow grid place-content-center pt-3.5 px-3.5 pb-16">
          <div className='text-center grid justify-items-center gap-y-3'>
            <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
            className='h-52 aspect-square rounded-full border-2 border-slate-300 p-1' />
            <h1 className='text-3xl font-medium mt-3'>{session.user.name}</h1>
            <h1 className='text-lg font-medium text-slate-500 mb-3'>{session.user.email}</h1>
            <h1 onClick={() => signOut()}
            className='py-2 px-5 bg-rose-500 text-slate-50 font-medium rounded-md cursor-pointer w-max'>Sign out</h1>
          </div>
        </div>
        <Bottombar />
      </div>
    </Layout>
  )
}
