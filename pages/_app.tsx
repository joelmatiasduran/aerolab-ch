import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/base.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { ModalContext } from '../contexts/ModalContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [modalValue, setModalValue] = useState('Welcome!!')
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true)
    }
    const handleComplete = () => {
      setPageLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])
  return pageLoading ? (
    <Loading />
  ) : (
    <ModalContext.Provider value={{ modalValue, setModalValue }}>
      <Component {...pageProps} />
    </ModalContext.Provider>
  )
}

export default MyApp
