import useSWR from 'swr'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'
import { fetcher } from '../utils/functions'
import Modal from './Modal'

interface Props {
  children?: React.ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const { data: user, error } = useSWR('/api/user/me', fetcher)
  if (error) return <p>Error fetching user</p>

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <Navbar user={user ? user : 'Loading ...'} />
      </header>
      <main className="relative">
        <Modal />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
