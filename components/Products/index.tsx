// import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/functions'
import Image from 'next/image'
import AeroCoin from '../../assets/icons/coin.svg'

interface ProductsProps {
  name: string
  price: string
}

const Products: React.FC<ProductsProps> = () => {
  const { data: products, error } = useSWR('/api/products', fetcher)

  if (error) return <p>Error loading products</p>

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products
          ? products.map((products, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col border-black border-4 p-6 rounded-xl"
                >
                  <h2>{products.name}</h2>
                  <Image
                    key={index}
                    src={products.img.hdUrl}
                    width={100}
                    height={250}
                  />
                  <h3>{products.category}</h3>
                  <button className="flex flex-col-reverse">
                    <div className="flex flex-row content-center items-center justify-center py-6 bg-black hover:bg-aero-blue text-white rounded-lg duration-300">
                      <h3>{products.cost}</h3>
                      <Image
                        src={AeroCoin}
                        alt="Coins"
                        width={50}
                        height={50}
                      />
                    </div>
                  </button>
                </div>
              )
            })
          : 'Loading..'}
      </div>
    </>
  )
}
export default Products
