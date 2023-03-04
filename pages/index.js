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
import Story from '../components/story';
import Post from '../components/post'

export default function Home() {
  const {data: session} = useSession()
  const router = useRouter()
  const [more, setMore] = useState(false)
  const [create, setCreate] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [search, setSearch] = useState(false)
  const post = [
    {
      name: 'profile_satu', time: '10h', like: 1017, 
      asset: [
        'https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-162.jpg', 
        'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg', 
        'https://upload.wikimedia.org/wikipedia/commons/a/ab/Original_William_Morris%27s_patterns%2C_digitally_enhanced_by_rawpixel_00015.jpg'
      ], 
      caption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      comment: 24
    },
    {
      name: 'profile_satu', time: '15h', like: 117, 
      asset: [
        'https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-162.jpg', 
        'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg'
      ], 
      caption: 'Contrary to popular belief',
      comment: 524
    },
    {
      name: 'profile_tiga', time: '12w', like: 17, 
      asset: [
        'https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-162.jpg'
      ], 
      caption: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      comment: 244
    }
  ]

  useEffect(() => {
    !session &&
    router.push('/signin')
  }, [session]);

  const Suggest = ({name, desc}) => {
    return (
      <div className='flex gap-x-3 items-center py-2'>
        <img src={session.user.image} alt='avatar' referrerPolicy='no-referrer' 
        className='rounded-full h-8 border border-slate-200 cursor-pointer' />
        <div className='grid gap-y-1.5 grow'>
          <h1 className='text-sm font-semibold cursor-pointer truncate leading-none'>{name}</h1>
          <h1 className='text-xs text-slate-500 truncate leading-none'>{desc}</h1>
        </div>
        <h1 className='text-xs font-semibold text-blue-500 cursor-pointer'>Follow</h1>
      </div>
    )
  }

  return (
    session &&
    <Layout title='Home'>
      <div className='flex flex-col md:flex-row'>
        <Leftbar setMore={setMore} setCreate={setCreate} setNotifications={setNotifications} setSearch={setSearch} />
        <Topbar setMore={setMore} setCreate={setCreate} setNotifications={setNotifications} setSearch={setSearch} />
        <div className="grow flex justify-center gap-x-14 max-w-[910px] mx-auto py-[70px] md:py-10 md:px-7">
          <div className='w-full max-w-[470px] grid content-start gap-y-px bg-slate-200'>
            <Story />
            {post.map(item => 
              <Post item={item} />  
            )}
          </div>
          <div className='grow hidden md:grid content-start'>
            <div className='flex gap-x-3 items-center'>
              <img src={session.user.image} alt='avatar' referrerPolicy='no-referrer' 
              className='rounded-full h-16 border border-slate-200 cursor-pointer' />
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
            <Suggest name='profile_1' desc='Followed by profile_2' />
            <Suggest name='profile_2' desc='Suggested for you' />
            <Suggest name='profile_3' desc='Followed by profile_1' />
            <Suggest name='profile_4' desc='Followed by profile_2 + 10 more' />
            <Suggest name='profile_5' desc='Followed by profile_1 + 2 more' />
            <h1 className='text-xs text-slate-500 leading-5 my-5'>
              <span className='cursor-pointer hover:underline'>About</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Help</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>API</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Jobs</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Privacy</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Terms</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Locations</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Language</span>
              <span> &sdot; </span>
              <span className='cursor-pointer hover:underline'>Indra verified</span> 
            </h1>
            <h1 className='text-xs text-slate-500 leading-none'>&copy; 2023 INDRAGRAM FROM INDRA</h1>
          </div>
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
