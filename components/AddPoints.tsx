import { useState } from 'react'
import { mutate } from 'swr'

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
      <div className="flex flex-row bg-pink-600 p-6 text-white">
        <button
          onClick={() => handleAdd(1000)}
          className="text-2xl px-6 py-4 text-black bg-aero-blue hover:bg-black hover:text-white font-bold  rounded-xl cursor-pointer duration-300  mx-4"
        >
          +1000
        </button>

        <button
          onClick={() => handleAdd(5000)}
          className="text-2xl px-6 py-4 text-black bg-aero-blue hover:bg-black hover:text-white font-bold  rounded-xl cursor-pointer duration-300  mx-4"
        >
          +5000
        </button>

        <button
          onClick={() => handleAdd(7500)}
          className="text-2xl px-6 py-4 text-black bg-aero-blue hover:bg-black hover:text-white font-bold  rounded-xl cursor-pointer duration-300  mx-4"
        >
          +7000
        </button>
      </div>
    </>
  )
}
export default AddPoints
