import Layout from '../components/Layout'
import useSWR from 'swr'
import { fetcher } from '../utils/functions'
import Image from 'next/image'

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
        <h1 className="text-3xl text-center">History</h1>
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Category</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Date</th>
                  </tr>
                </thead>
                {data
                  ? data.map((data, index) => {
                      return (
                        <>
                          <tbody key={index}>
                            <tr className="my-4 hover:bg-black hover:text-white duration-150 px-4 transform hover:scale-110 cursor-pointer">
                              <td className="hidden pb-4 md:table-cell">
                                <a href="#">
                                  <Image
                                    src={data.img.hdUrl}
                                    className="w-20 rounded"
                                    alt={data.name}
                                    width={120}
                                    height={100}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="#">
                                  <p className="mb-2 md:ml-4">{data.name}</p>
                                  <form action="" method="POST">
                                    <button
                                      type="submit"
                                      className="text-gray-700 md:ml-4"
                                    >
                                      <small>(Remove item)</small>
                                    </button>
                                  </form>
                                </a>
                              </td>
                              <td className="justify-center md:justify-end md:flex mt-6">
                                <div className="w-20 h-10">
                                  <div className="relative flex flex-row w-full h-8">
                                    <span>{data.category}</span>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden text-right md:table-cell">
                                <span className="text-sm lg:text-base font-medium">
                                  {data.cost}
                                </span>
                              </td>
                              <td className="text-right">
                                <span className="text-sm lg:text-base font-medium">
                                  {data.createDate.substr(0, 10)}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      )
                    })
                  : 'Loading...'}
              </table>
              <hr className="pb-6 mt-6"></hr>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default history
