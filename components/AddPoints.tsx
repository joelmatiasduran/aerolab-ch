import { useState } from 'react'
import { mutate } from 'swr'
import { motion } from 'framer-motion'

interface AddPointsProps {
  points: number
  user: any
}

const AddPoints: React.FC<AddPointsProps> = ({ points, user }) => {
  const [isRedeeming, setIsRedeeming] = useState({
    1000: false,
    5000: false,
    7500: false,
  })

  const handleAdd = async (amount: number): Promise<void> => {
    setIsRedeeming((isRedeeming) => ({ ...isRedeeming, [amount]: true }))

    await fetch('/api/user/points', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
    isRedeeming
    // setIsRedeeming((isRedeeming) => ({ ...isRedeeming, [amount]: false }))
    mutate('/api/user/me', { ...user, points: points + amount })
  }
  return (
    <>
      <motion.div
        initial={{ x: '250vw', height: 0 }}
        animate={{ x: 0, boxShadow: '0px 0px 40px #ff0062', height: '100%' }}
        className="flex flex-row bg-pink-600 p-6 text-white"
      >
        <motion.button
          initial={{ y: '250vh' }}
          animate={{ y: 0 }}
          whileHover={{ boxShadow: '0px 0px 40px #00eeff', scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleAdd(1000)}
          className="text-2xl px-6 py-4 text-black bg-white   font-bold  rounded-xl cursor-pointer  mx-4"
        >
          +1000
        </motion.button>

        <motion.button
          initial={{ y: '-250vh' }}
          animate={{ y: 0 }}
          whileHover={{ boxShadow: '0px 0px 40px #ff0000', scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleAdd(5000)}
          className="text-2xl px-6 py-4 bg-black text-white font-bold  rounded-xl cursor-pointer  mx-4"
        >
          +5000
        </motion.button>

        <motion.button
          initial={{ y: '250vh' }}
          animate={{ y: 0 }}
          whileHover={{ boxShadow: '0px 0px 40px #ffe600', scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleAdd(7500)}
          className="text-2xl px-6 py-4 text-black bg-yellow-400  hover:text-white font-bold  rounded-xl cursor-pointer mx-4"
        >
          +7000
        </motion.button>
      </motion.div>
    </>
  )
}
export default AddPoints
