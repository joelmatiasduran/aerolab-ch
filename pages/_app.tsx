import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
