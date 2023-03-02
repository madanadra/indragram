import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react'
import Layout from "../components/layout";
import Bottombar from "../components/bottombar";
import Leftbar from "../components/leftbar";
import Topbar from "../components/topbar";
import More from '../components/more';
import Create from '../components/create';
import Notifications from '../components/notifications';
import Search from '../components/search';
import { BookmarkIcon, ChatBubbleBottomCenterIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const {data: session} = useSession()
  const router = useRouter()
  const [more, setMore] = useState(false)
  const [create, setCreate] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [search, setSearch] = useState(false)
  const story = useRef(0)
  const [right, setRight] = useState(false)
  const [left, setLeft] = useState(false)

  useEffect(() => {
    slide()
  }, []);

  useEffect(() => {
    !session &&
    router.push('/signin')
  }, [session]);

  const Story = ({name}) => {
    return (
      <div>
        <div className='grid gap-y-1.5 w-16 cursor-pointer'>
          <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
          className='rounded-full aspect-square w-full p-0.5 border-2 border-blue-500' />
          <h1 className='text-xs text-center truncate'>{name}</h1>
        </div>
      </div>
    )
  }

  const Card = ({name, time, like, caption, comment}) => {
    return (
      <div className='grid gap-y-3 py-5 bg-[#fff]'>
        <div className='flex items-center gap-x-3 max-[470px]:px-3.5'>
          <img src={session.user.image} alt='Avatar' referrerPolicy="no-referrer"
          className='rounded-full aspect-square h-8 border border-slate-200 cursor-pointer' />
          <div className='grow flex items-center gap-x-1 text-sm'>
            <h1 className=' font-semibold cursor-pointer hover:text-slate-500'>{name}</h1>
            <h1 className='text-slate-500'>&bull; {time}</h1>
          </div>
          <EllipsisHorizontalIcon className='w-7 cursor-pointer hover:text-slate-500' />
        </div>
        <img alt='post' className='rounded w-full h-auto'
        src='https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-162.jpg' />
        <div className='flex justify-between gap-x-3.5 max-[470px]:px-3.5'>
          <div className='flex items-center gap-x-3.5'>
            <HeartIcon className='h-7 cursor-pointer hover:text-slate-500' />
            <ChatBubbleBottomCenterIcon className='h-7 cursor-pointer hover:text-slate-500' />
            <PaperAirplaneIcon className='h-7 cursor-pointer hover:text-slate-500' />
          </div>
          <BookmarkIcon className='h-7 cursor-pointer hover:text-slate-500' />
        </div>
        <h1 className='text-sm font-semibold leading-none max-[470px]:px-3.5'>{like}</h1>
        <h1 className='text-sm  cursor-pointer font-semibold max-[470px]:px-3.5'>
          {name}
          <span className='font-normal cursor-text'> {caption}</span>
        </h1>
        <h1 className='cursor-pointer text-sm text-slate-500 w-max max-[470px]:px-3.5'>View all {comment} comments</h1>
        <div className='relative -my-1 max-[470px]:px-3.5'>
          <input type='text' placeholder='Add a comment...' className='w-full outline-0 text-sm pr-5' />
          <FaceSmileIcon className='h-3.5 text-slate-500 absolute right-0 max-[470px]:right-3.5 top-1.5 cursor-pointer' />
        </div>
      </div>
    )
  }

  const Suggest = ({name, desc}) => {
    return (
      <div className='flex gap-x-3 items-center py-1.5'>
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

  const scroll = (scrollOffset) => {
    story.current.scrollLeft += scrollOffset;
  };

  const slide = () => {
    story.current.scrollLeft > 0 ? setLeft(true) : setLeft(false)
    story.current.scrollLeft < story.current.scrollWidth - story.current.clientWidth ? setRight(true) : setRight(false)
  }

  return (
    session &&
    <Layout title='Home'>
      <div className='flex flex-col md:flex-row'>
        <Leftbar setMore={setMore} setCreate={setCreate} setNotifications={setNotifications} setSearch={setSearch} />
        <Topbar setMore={setMore} setCreate={setCreate} setNotifications={setNotifications} setSearch={setSearch} />
        <div className="grow flex justify-center gap-x-14 max-w-[910px] mx-auto py-[70px] md:py-10 md:px-7">
          <div className='w-full max-w-[470px] grid content-start gap-y-px bg-slate-200'>
            <div className='relative grid bg-[#fff] -mb-px pb-5'>
              <div onClick={() => scroll(-story.current.clientWidth)} 
              className={`${!left && 'hidden'} absolute bottom-5 top-0 left-0 max-[470px]:left-3.5 grid place-content-center pointer-events-none`}>
                <ChevronLeftIcon className='h-7 aspect-square rounded-full p-1 bg-slate-100 text-slate-500 hover:text-blue-500 pointer-events-auto cursor-pointer' />
              </div>
              <div onClick={() => scroll(story.current.clientWidth)} 
              className={`${!right && 'hidden'} absolute bottom-5 top-0 right-0 max-[470px]:right-3.5 grid place-content-center pointer-events-none`}>
                <ChevronRightIcon className='h-7 aspect-square rounded-full p-1 bg-slate-100 text-slate-500 hover:text-blue-500 pointer-events-auto cursor-pointer' />
              </div>
              <div ref={story} onScroll={() => slide()} className='flex gap-x-4 overflow-auto max-[470px]:px-3.5 slider'>
                <Story name='profile_1_lalayeyeye' />
                <Story name='profile_2_lalayeyeye' />
                <Story name='profile_3_lalayeyeye' />
                <Story name='profile_4_lalayeyeye' />
                <Story name='profile_5_lalayeyeye' />
                <Story name='profile_6_lalayeyeye' />
                <Story name='profile_7_lalayeyeye' />
                <Story name='profile_8_lalayeyeye' />
                <Story name='profile_9_lalayeyeye' />
                <Story name='profile_10_lalayeyeye' />
                <Story name='profile_11_lalayeyeye' />
                <Story name='profile_12_lalayeyeye' />
                <Story name='profile_13_lalayeyeye' />
                <Story name='profile_14_lalayeyeye' />
              </div>
            </div>
            <Card name='profile_1' time='10h' like='1,170 likes' comment='310'
            caption='Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' />
            <Card name='profile_2' time='15h' like='170 likes' comment='10'
            caption='Contrary to popular belief, Lorem Ipsum is not simply random text.' />
            <Card name='profile_3' time='10w' like='70 likes' comment='30'
            caption='It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' />
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
            <div className='flex justify-between items-center font-semibold my-3.5'>
              <h1 className='text-sm text-slate-500'>Suggestions for you</h1>
              <h1 className='text-xs cursor-pointer'>See all</h1>
            </div>
            <Suggest name='profile_1' desc='Followed by profile_2' />
            <Suggest name='profile_2' desc='Suggested for you' />
            <Suggest name='profile_3' desc='Followed by profile_1' />
            <Suggest name='profile_4' desc='Followed by profile_2 + 10 more' />
            <Suggest name='profile_5' desc='Followed by profile_1 + 2 more' />
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
