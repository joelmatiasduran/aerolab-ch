// import { useState } from 'react'
// import { mutate } from 'swr'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AeroCoin from '../../assets/icons/coin.svg'
import AeroBuy from '../../assets/icons/buy-white.svg'
import { ProductsTypes } from '../../interfaces/AeroTypes'

interface ProductProps {
  products: ProductsTypes
  index: number
  userCash: number
}

const Product: React.FC<ProductProps> = ({ products, index, userCash }) => {
  return (
    <>
      <motion.div
        initial={{ x: '-250vw' }}
        animate={{ x: 0 }}
        whileHover={{
          boxShadow: '0px 0px 40px #ffd900 ',
        }}
        key={index}
        className="flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-white border border-gray-200 p-6 rounded-xl cursor-pointer"
      >
        <div className="absolute">
          <Image src={AeroBuy} alt="Coins" width={40} height={40} />
        </div>
        <Image
          key={index}
          src={products.img.hdUrl}
          alt={products.name}
          width={250}
          height={200}
        />
        <h3 className="text-lg text-gray-400">{products.category}</h3>
        <h2 className="text-xl font-medium">{products.name}</h2>

        {userCash > products.cost ? (
          <button
            className="flex flex-col-reverse pt-6 w-full min-w-full"
            // onClick={() => handleRedeem(products.id)}
          >
            <div className="flex flex-row justify-between w-full min-w-full py-2 bg-yellow-500 hover:bg-indigo-700 text-white rounded-lg duration-300">
              <button className="text-lg pl-4">Redeem now!</button>
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-lg">{products.cost}</h3>
                <Image src={AeroCoin} alt="Coins Icon" width={30} height={30} />
              </div>
            </div>
          </button>
        ) : (
          <button className="flex flex-col-reverse pt-6 w-full min-w-full">
            <div className="flex flex-row justify-between w-full min-w-full py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg duration-300">
              <button className="text-lg pl-4">You need</button>
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-lg"> +{products.cost - userCash}</h3>
                <Image src={AeroCoin} alt="Coins Icon" width={30} height={30} />
              </div>
            </div>
          </button>
        )}
      </motion.div>
    </>
  )
}
export default Product
