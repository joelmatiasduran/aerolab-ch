import useSWR from 'swr'
import { fetcher } from '../utils/functions'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Products from '../components/Products'

const Home: React.FC = () => {
  const { data: user, error } = useSWR('/api/user/me', fetcher)
  if (error) return <p>Error fetching user</p>
  return (
    <Layout title="Aerolab | Challenge">
      <Hero />
      <section className="flex flex-col items-center justify-center min-h-screen text-4xl">
        <div>
          <h1>
            {' '}
            Sort by : <button>Lowest</button> <button>Lowest</button>
          </h1>
        </div>
        <Products name={''} price={''} user={user ? user : 0} />
      </section>
      <div>
        <h3 className="text-3xl text-left px-32"> Page 1 - 2</h3>
      </div>
    </Layout>
  )
}

export default Home
