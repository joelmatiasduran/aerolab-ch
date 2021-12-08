import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const Home = (): JSX.Element => (
  <Layout title="Aerolab | Challenge">
    <Hero />
    <section className="flex flex-col items-center justify-center min-h-screen text-4xl">
      <h1>Here is going to be the products</h1>
    </section>
  </Layout>
)

export default Home
