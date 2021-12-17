import useSWR from 'swr'
import { fetcher } from '../utils/functions'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Products from '../components/Products'

const Home: React.FC = () => {
  //fetching data
  const { data: user, error } = useSWR('/api/user/me', fetcher)
  if (error) return <p>Error fetching user</p>
  //
  return (
    <Layout title="Aerolab | Challenge">
      <Hero />
      <section className="flex flex-col items-center justify-center min-h-full text-4xl">
        <Products user={user ? user : 0} name={''} price={0} />
      </section>
    </Layout>
  )
}

export default Home
