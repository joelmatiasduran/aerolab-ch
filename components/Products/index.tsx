// import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/functions'
import Product from './Product'
import Loading from '../Loading'

interface ProductsProps {
  name: string
  price: string
  user: UserTypes
}

interface UserTypes {
  points: number
}

const Products: React.FC<ProductsProps> = ({ user }) => {
  const userCash = user.points
  const { data: products, error } = useSWR('/api/products', fetcher)

  if (error) return <p>Error loading products, the sadness..</p>
  return (
    <>
      <div
        className={
          products
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white'
            : 'w-full'
        }
      >
        {products ? (
          products.map((products, index) => {
            return (
              <Product
                key={index}
                products={products}
                userCash={userCash}
                index={index}
              />
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
