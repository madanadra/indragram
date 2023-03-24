import { useContext, useEffect } from 'react'
import Layout from "../components/layout";
import Story from '../components/story';
import Suggest from '../components/suggest';
import Post from '../components/post'
import Footermenu from '../components/footermenu';
import { IndragramContext } from '../store/context';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const {state} = useContext(IndragramContext)
  const {data: session, status} = useSession()
  const router = useRouter()
  const {ref, inView} = useInView()

  useEffect(() => {
    status === 'unauthenticated' &&
    router.push('/signin')
  }, [status])

  return (
    status === 'authenticated' &&
    <Layout title='Home'>
      <div ref={ref} className="grow flex justify-center gap-x-14 max-w-[910px] mx-auto py-[70px] md:py-10 md:px-7">
        <div className='w-full max-w-[470px] grid content-start'>
          <Story />
          {state.post.filter(item => 'asset' in item).map((item, i) => 
            <Post key={i} item={item} view={inView} />  
          )}
        </div>
        <div className='grow hidden lg:grid content-start'>
          <div className='flex gap-x-3 items-center'>
            <img src={session.user.image} alt='avatar' referrerPolicy='no-referrer' 
            className='rounded-full h-16 aspect-square border border-slate-200 cursor-pointer' />
            <div className='grid gap-y-1.5 grow'>
              <h1 className='text-sm font-semibold cursor-pointer truncate leading-none'>test_user</h1>
              <h1 className='text-sm text-slate-500 truncate leading-none'>{session.user.name}</h1>
            </div>
            <h1 className='text-xs font-semibold text-blue-500 cursor-pointer'>Switch</h1>
          </div>
          <div className='flex justify-between items-center font-semibold my-3'>
            <h1 className='text-sm text-slate-500'>Suggestions for you</h1>
            <h1 className='text-xs cursor-pointer'>See all</h1>
          </div>
          {state.suggest.map((item, i) => 
            <Suggest key={i} item={item} />
          )}
          <h1 className='text-xs text-slate-500 leading-5 my-5'>
            {state.footermenu.map((item, i) => 
              <Footermenu key={i} item={item} />
            )}
          </h1>
          <h1 className='text-xs text-slate-500 leading-none'>&copy; 2023 INDRAGRAM FROM INDRA</h1>
        </div>
      </div>
    </Layout>
  )
}
