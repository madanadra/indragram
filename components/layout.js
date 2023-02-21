import Head from "next/head";

export default function Layout({title, children}) {
    const pageTitle = title + ' - Indragram'

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <main className="font-main text-[#000] bg-[#fff] w-screen h-screen overflow-y-scroll">
                {children}
            </main>
        </>
    )
}