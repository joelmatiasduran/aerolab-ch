import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/functions'
import Product from './Product'
import { motion } from 'framer-motion'
import { UserTypes } from '../../interfaces/AeroTypes'
import ProductLoader from './ProductLoader'
import Loading from '../Loading'

interface ProductsProps {
  name: string
  price: number
  user: UserTypes
}

const Products: React.FC<ProductsProps> = ({ user }) => {
  //Fetching data
  const { data: products, error } = useSWR('/api/products', fetcher, {
    refreshInterval: 1000,
  })
  if (error) return <p>Error loading products, the sadness.. :(</p>

  //Refactor
  const userCash = user.points

  //Sorting
  const [isFiltering, setIsFiltering] = useState<false | true>(false)
  const [list, setList] = useState<[] | null>(products)

  //Handlers
  const handleSortLow = () => {
    setList(
      products.sort((a, b) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
    )
    setIsFiltering(true)
    setIsFiltering(false)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-6 pl-0 m-6  pt-0 mt-0 text-white">
        <motion.button
          initial={{ x: '-250vw' }}
          animate={{ x: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          className="p-4 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
        >
          Most Recent
        </motion.button>
        <motion.button
          onClick={handleSortLow}
          onDoubleClick={() => setIsFiltering(!isFiltering)}
          initial={{ x: '-250vw' }}
          animate={{ x: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900',
            scale: 1.1,
          }}
          className="p-4 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
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
          className="p-4 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
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
          className="p-4 m-6 rounded-xl bg-transparent hover:bg-black text-black border-2 border-black hover:text-white"
        >
          A-Z
        </motion.button>
      </div>

      <motion.div
        initial={{ x: '-250vw' }}
        animate={!isFiltering ? { x: 0 } : { x: '-250vw' }}
        className={
          list
            ? 'grid grid-cols-1d-cols-3 xl:grid-cols-4 gap-6 bg-white'
            : 'w-full'
        }
      >
        {list ? (
          list.map((products, index) => {
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
                  <ProductLoader key={index} />
                )}
              </>
            )
          })
        ) : (
          <Loading />
        )}
      </motion.div>
    </>
  )
}
export default Products
