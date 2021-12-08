import Layout from '../components/Layout'

const CustomFourOFour: React.FC = () => {
  return (
    <>
      <Layout title="404 | Not Found">
        <div className="flex flex-1 justify-center items-center min-h-screen bg-black text-white">
          <h1 className="text-4xl">Sorry. We can’t find that page.</h1>
        </div>
        <div className="bg-white">
          <h2> {process.env.MY_MESSAGE} home </h2>
        </div>
      </Layout>
    </>
  )
}
export default CustomFourOFour
