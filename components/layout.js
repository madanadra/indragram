import Head from "next/head";
import Bottombar from "../components/bottombar";
import Leftbar from "../components/leftbar";
import Topbar from "../components/topbar";
import More from '../components/more';
import Create from '../components/create';
import Notifications from '../components/notifications';
import Search from '../components/search';
import Postmenu from './postmenu';
import { useSession } from "next-auth/react";

export default function Layout({title, children}) {
    const pageTitle = title + ' - Indragram'
    const {status} = useSession()

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            {status === 'authenticated' ?
                <main className="font-main text-neutral-800 bg-[#fff] flex flex-col md:flex-row">
                    <Leftbar />
                    <Topbar />
                    {children}
                    <Bottombar />
                    <Search />
                    <Notifications />
                    <Create />
                    <More />
                    <Postmenu />
                </main>
            : status === 'unauthenticated' ?
                <main className="font-main text-neutral-800 bg-[#fff]">
                    {children}
                </main>
            : []
            }
        </>
    )
}