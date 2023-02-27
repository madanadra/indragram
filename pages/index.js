import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Layout from "../components/layout";
import Bottombar from "../components/bottombar";
import Leftbar from "../components/leftbar";
import Topbar from "../components/topbar";
import More from '../components/more';
import Create from '../components/create';
import Notifications from '../components/notifications';
import Search from '../components/search';

export default function Home() {
  const {data: session} = useSession()
  const router = useRouter()
  const [more, setMore] = useState(false)
  const [create, setCreate] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [search, setSearch] = useState(false)

  useEffect(() => {
    !session &&
    router.push('/signin')
  }, [session]);

  return (
    session &&
    <Layout title='Home'>
      <div className='flex flex-col md:flex-row'>
        <Leftbar setMore={setMore} setCreate={setCreate} setNotifications={setNotifications} setSearch={setSearch} />
        <Topbar setMore={setMore} setCreate={setCreate} setNotifications={setNotifications} setSearch={setSearch} />
        <div className="grow flex gap-x-5 max-w-4xl mx-auto bg-slate-200">
          
        </div>
        <Bottombar />
      </div>
      <Search search={search} setSearch={setSearch} />
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <Create create={create} setCreate={setCreate} />
      <More more={more} setMore={setMore} />
    </Layout>
  )
}
