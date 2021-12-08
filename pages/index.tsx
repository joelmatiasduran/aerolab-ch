import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Products from '../components/Products'

const Home: React.FC = () => {
  return (
    <Layout title="Aerolab | Challenge">
      <Hero />
      <section className="flex flex-col items-center justify-center min-h-screen text-4xl">
        <h1>Here is going to be the products</h1>
        {/* <p>{JSON.stringify(user.points)}</p>
        <p>{JSON.stringify(user.name)}</p> */}
        <Products name={''} price={''} />
      </section>
    </Layout>
  )
}

export default Home
