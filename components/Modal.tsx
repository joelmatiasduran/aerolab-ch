import { useState, useEffect, useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import { motion } from 'framer-motion'

interface ModaProps {
  handleClose?: () => void
  text?: string
}

const Modal: React.FC<ModaProps> = () => {
  const { modalValue, setModalValue } = useContext(ModalContext)
  const [isShowing, setIsShowing] = useState('')

  useEffect(() => {
    setIsShowing('in')
    let msg: string
    const newLocal = modalValue === 'Success!!' || 'Error'
    newLocal ? (msg = 'Thanks for Redeeming') : (msg = 'Great!')
    setTimeout(() => {
      //Insert a way to put the recent ones based on date by the
      setIsShowing('out')
      setModalValue(msg)
    }, 1500)
  }, [modalValue])
  return (
    <>
      <motion.div
        initial={{ x: '-250vw' }}
        animate={
          isShowing === 'in'
            ? {
                x: 0,
                boxShadow: '0px 0px 40px #fc1895',
                border: 'transparent',
                backgroundColor: '#fc1895',
              }
            : isShowing === 'out'
            ? {
                x: '250vw',
                boxShadow: '0px 0px 40px #00ffd5',
                border: 'transparent',
                backgroundColor: '#18dcfc',
              }
            : { x: 0 }
        }
        className={
          isShowing
            ? 'fixed flex flex-col items-center justify-center z-20 bottom-4 w-1/6 min-w-max h-14 p-4 font-medium text-black rounded-3xl'
            : 'hidden'
        }
      >
        {modalValue}
      </motion.div>
    </>
  )
}
export default Modal
