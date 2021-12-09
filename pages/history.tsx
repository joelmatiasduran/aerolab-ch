import Layout from '../components/Layout'
import useSWR from 'swr'
import { fetcher } from '../utils/functions'

interface historyProps {
  name: string
  price: string
}

const history: React.FC<historyProps> = () => {
  const { data, error } = useSWR('/api/user/history', fetcher)

  if (error) return <h2>Sorry bud, we could not find it </h2>

  return (
    <>
      <Layout title="Aerolab | History">
        <div>This is the history</div>
        <h2>{JSON.stringify(data)}</h2>
      </Layout>
    </>
  )
}
export default history
