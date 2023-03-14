import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Indragram } from '../store/context'

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Indragram>
        <Component {...pageProps} />
      </Indragram>
    </SessionProvider>
  )
}
