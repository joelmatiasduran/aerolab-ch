// import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/functions'
import Image from 'next/image'
import AeroCoin from '../../assets/icons/coin.svg'
import Loading from '../Loading'

interface ProductsProps {
  name: string
  price: string
}

const Products: React.FC<ProductsProps> = () => {
  const { data: products, error } = useSWR('/api/products', fetcher)

  if (error) return <p>Error loading products</p>
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
              <div
                key={index}
                className="flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-white hover:bg-black group border border-gray-200 p-6 rounded-xl duration-300 cursor-pointer"
              >
                <Image
                  key={index}
                  src={products.img.hdUrl}
                  width={150}
                  height={250}
                />
                <h3 className="text-sm text-gray-400">{products.category}</h3>
                <h2 className="text-xl font-bold group-hover:text-white">
                  {products.name}
                </h2>

                <button className="flex flex-col-reverse pt-6">
                  <div className="flex flex-row  justify-between py-2 bg-black group-hover:text-black group-hover:bg-white hover:bg-aero-blue text-white rounded-lg duration-300">
                    <button className="text-lg pl-4">Redeem</button>
                    <div className="flex flex-row items-center justify-center">
                      <h3>{products.cost}</h3>
                      <Image
                        src={AeroCoin}
                        alt="Coins"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </button>
              </div>
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
