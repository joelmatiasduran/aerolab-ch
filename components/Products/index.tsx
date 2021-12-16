import { useState, useEffect } from 'react'
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
  const [isFiltering, setIsFiltering] = useState<string>('')
  const [list, setList] = useState<[] | null>(products)
  const [isSorting, setIsSorting] = useState<boolean>(false)

  //Handlers
  const handleSortLow = () => {
    setIsFiltering('low')
    setTimeout(() => {
      setList(
        products.sort((a, b) =>
          a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0
        )
      )
    }, 300)
  }

  const handleSortHigh = () => {
    setIsFiltering('high')
    setTimeout(() => {
      setList(
        products.sort((b, a) =>
          a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0
        )
      )
    }, 300)
  }

  //Animate Sorting
  useEffect(() => {
    setIsSorting(true)
    setTimeout(() => {
      setIsSorting(false)
    }, 1)
  }, [isFiltering])

  return (
    <>
      {products ? (
        <div className="flex flex-col md:flex-row w-full p-6 pl-0 m-6  pt-0 mt-0 text-white">
          {' '}
          <span className="p-4 m-6 rounded-xl text-black">Sort by :</span>
          <motion.button
            initial={{ x: '-250vw' }}
            animate={
              isFiltering !== 'recent'
                ? {
                    x: 0,
                    backgroundColor: '#ffffff',
                    border: '2px solid black',
                  }
                : {
                    x: 0,
                    boxShadow: '0px 0px 40px #00ffd5',
                    border: 'transparent',
                    backgroundColor: '#18dcfc',
                  }
            }
            whileHover={
              isFiltering !== 'recent'
                ? {
                    scale: 1.1,
                    backgroundColor: '#18dcfc',
                    boxShadow: '0px 0px 40px #00ffd5',
                    border: 'transparent',
                  }
                : {
                    boxShadow: '0px 0px 40px #00ffd5',
                    scale: 1.1,
                  }
            }
            whileTap={{ scale: 0.9 }}
            className="p-4 m-6 rounded-xl bg-transparent hover:bg-aero-blue focus:bg-aero-blue hover:border-transparent text-black border-2 border-black focus:border-transparent"
          >
            Most Recent
          </motion.button>
          <motion.button
            onClick={handleSortLow}
            initial={{ x: '-250vw' }}
            animate={
              isFiltering !== 'low'
                ? {
                    x: 0,
                    backgroundColor: '#ffffff',
                    border: '2px solid black',
                  }
                : {
                    x: 0,
                    boxShadow: '0px 0px 40px #00ffd5',
                    border: 'transparent',
                    backgroundColor: '#18dcfc',
                  }
            }
            whileHover={
              isFiltering !== 'low'
                ? {
                    scale: 1.1,
                    backgroundColor: '#18dcfc',
                    boxShadow: '0px 0px 40px #00ffd5',
                    border: 'transparent',
                  }
                : {
                    boxShadow: '0px 0px 40px #00ffd5',
                    scale: 1.1,
                  }
            }
            className="p-4 m-6 rounded-xl bg-transparent hover:bg-aero-blue hover:border-transparent text-black border-2 border-black focus:border-transparent"
          >
            Lower Price
          </motion.button>
          <motion.button
            initial={{ x: '-250vw' }}
            animate={
              isFiltering !== 'high'
                ? {
                    x: 0,
                    backgroundColor: '#ffffff',
                    border: '2px solid black',
                  }
                : {
                    x: 0,
                    boxShadow: '0px 0px 40px #00ffd5',
                    border: 'transparent',
                    backgroundColor: '#18dcfc',
                  }
            }
            whileHover={
              isFiltering !== 'high'
                ? {
                    scale: 1.1,
                    backgroundColor: '#18dcfc',
                    boxShadow: '0px 0px 40px #00ffd5',
                    border: 'transparent',
                  }
                : {
                    boxShadow: '0px 0px 40px #00ffd5',
                    scale: 1.1,
                  }
            }
            className="p-4 m-6 rounded-xl bg-transparent hover:bg-aero-blue focus:bg-aero-blue hover:border-transparent text-black border-2 border-black focus:border-transparent"
            onClick={handleSortHigh}
          >
            Higher Price
          </motion.button>
        </div>
      ) : (
        ''
      )}

      <motion.div
        initial={{ x: '-250vw' }}
        animate={!isSorting ? { x: 0 } : { x: '-250vw' }}
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
