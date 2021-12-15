import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/functions'
import Product from './Product'
import Loading from '../Loading'
import { motion } from 'framer-motion'
import { UserTypes } from '../../interfaces/AeroTypes'
import LoadingProduct from './LoadingProduct'

interface ProductsProps {
  name: string
  price: number
  user: UserTypes
}

const Products: React.FC<ProductsProps> = ({ user }) => {
  //Pages
  // const [pageIndex, setPageIndex] = useState(0)
  //Fetching data
  const { data: products, error } = useSWR('/api/products', fetcher)
  if (error) return <p>Error loading products, the sadness..</p>

  //Small Refactor
  const userCash = user.points

  //Sorting
  const [list, setList] = useState<[] | null | any>(products)

  //Handlers
  const HandleSort = () => {
    setList(
      products.sort((a, b) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
    )
    // tell all SWRs with this key to revalidate
  }

  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-6 m-6  pt-0 mt-0 text-white">
        <motion.button
          initial={{ x: '-250vw' }}
          animate={{ x: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          className="p-6 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
        >
          Most Recent
        </motion.button>
        <motion.button
          initial={{ x: '-250vw' }}
          animate={{ x: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          className="p-6 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
          onClick={() => {
            HandleSort
          }}
        >
          Lower Price
        </motion.button>
        <motion.button
          initial={{ x: '-250vw' }}
          animate={{ x: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          className="p-6 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
          onClick={() =>
            setList(
              products.sort((b, a) =>
                a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0
              )
            )
          }
        >
          Higher Price
        </motion.button>
        <motion.button
          initial={{ x: '-250vw' }}
          animate={{ x: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          className="p-6 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
        >
          A-Z
        </motion.button>
      </div>

      <div
        className={
          products
            ? 'grid grid-cols-1d-cols-3 xl:grid-cols-4 gap-6 bg-white'
            : 'w-full'
        }
      >
        {products ? (
          products
            // .sort((a, b) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
            .map((products, index) => {
              return (
                <>
                  {list ? (
                    <Product
                      key={index}
                      products={products}
                      userCash={userCash}
                      index={index}
                    />
                  ) : (
                    <LoadingProduct key={index} />
                  )}
                </>
              )
            })
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}
export default Products
