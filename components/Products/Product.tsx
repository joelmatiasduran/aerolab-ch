import { useContext, useState } from 'react'
import { mutate } from 'swr'
import { motion } from 'framer-motion'
import { ProductsTypes } from '../../interfaces/AeroTypes'
import Image from 'next/image'
import AeroCoin from '../../assets/icons/coin.svg'
import AeroBuy from '../../assets/icons/buy-white.svg'
import { ModalContext } from '../../contexts/ModalContext'

import ProductLoader from './ProductLoader'

interface ProductProps {
  products: ProductsTypes
  userCash: number
}

const Product: React.FC<ProductProps> = ({ products, userCash }) => {
  //State For Hover Effects
  const [isHovered, setIsHovered] = useState<boolean>(false)
  //State For Modals
  const { setModalValue } = useContext(ModalContext)

  const [isRedeeming, setIsRedeeming] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSuccessful, setIsSuccessful] = useState<string | null>('')

  // Small Refactor
  const productId = products._id

  const handleRedeem = async (productId: string): Promise<void> => {
    setIsRedeeming(true)
    const response = await fetch('/api/redeem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: productId,
        cost: products.cost,
      }),
    })
    setIsRedeeming(false)

    setIsSuccessful(response.status === 200 ? 'success' : 'error')
    setModalValue(response.status === 200 ? 'Success!!' : 'Error')
    mutate('/api/user/me', { ...products, points: userCash - products.cost })
    mutate('/api/user/history')
  }

  return (
    <>
      {products.img.hdUrl ? (
        <motion.div
          initial={{ y: '250vh' }}
          animate={{ y: 0 }}
          whileHover={{
            boxShadow: '0px 0px 40px #ffd900 ',
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-white border border-gray-200 p-6 rounded-xl cursor-pointer"
        >
          <div className="absolute">
            <Image src={AeroBuy} alt="Coins" width={150} height={100} />
          </div>
          <Image
            src={products.img.hdUrl ? products.img.hdUrl : products.img.url}
            alt={products.name}
            width={250}
            height={200}
            className={`object-contain hover:object-fit transform duration-150 ${
              isHovered ? 'transform scale-110' : ''
            }`}
          />
          <h3 className="text-lg text-gray-400">{products.category}</h3>
          <h2 className="text-xl font-medium">{products.name}</h2>
          <h2 className="text-2xl font-base pt-2 pr-2 ">
            ${''}
            {products.cost}
          </h2>

          <>
            {userCash >= products.cost ? (
              <button
                className="flex flex-col-reverse pt-6 w-full min-w-full"
                onClick={() => handleRedeem(productId)}
              >
                <div className="flex flex-row justify-between w-full min-w-full py-2 bg-yellow-500 hover:bg-indigo-700 text-white rounded-lg duration-300">
                  <span className="text-lg pl-4">
                    {isRedeeming ? <span>Processing...</span> : 'Redeem Now'}
                  </span>
                  <div className="flex flex-row items-center justify-center">
                    {isRedeeming ? (
                      ''
                    ) : (
                      <>
                        <h3 className="text-lg ml-4">{products.cost}</h3>
                        <Image
                          src={AeroCoin}
                          alt="Coins Icon"
                          width={30}
                          height={30}
                        />
                      </>
                    )}
                  </div>
                </div>
              </button>
            ) : (
              <button className="flex flex-col-reverse pt-6 w-full min-w-full">
                <div className="flex flex-row justify-between w-full min-w-full py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg duration-300">
                  <span className="text-lg pl-4">You need</span>
                  <div className="flex flex-row items-center justify-center">
                    <h3 className="text-lg"> +{products.cost - userCash}</h3>
                    <Image
                      src={AeroCoin}
                      alt="Coins Icon"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </button>
            )}
          </>
        </motion.div>
      ) : (
        <ProductLoader />
      )}
    </>
  )
}
export default Product
