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
      <div
        className="bg-black p-6 text-white cursor-pointer"
        onClick={() => handleAdd(7500)}
      >
        Pog
      </div>
    </>
  )
}
export default AddPoints
