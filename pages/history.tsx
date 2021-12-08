import Layout from '../components/Layout'
// import useSWR from 'swr'
// import { fetcher } from '../utils/functions'

interface historyProps {
  name: string
  price: string
}

const history: React.FC<historyProps> = () => {
  return (
    <>
      <Layout title="Aerolab | History">
        <div>This is the history</div>
      </Layout>
    </>
  )
}
export default history
