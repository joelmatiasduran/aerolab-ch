import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/base.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState<boolean>(false)
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
  return pageLoading ? <Loading /> : <Component {...pageProps} />
}

export default MyApp
