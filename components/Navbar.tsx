import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AeroLogo from '../assets/aerolab-logo.svg'
import AeroCoin from '../assets/icons/coin.svg'
import { motion } from 'framer-motion'
import { UserObj } from '../interfaces/AeroTypes'
import AddPoints from './AddPoints'

interface NavbarProps {
  user: UserObj
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [navfull, setNavfull] = useState<false | true>(true)
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-indigo-700 text-white p-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <a className="flex flex-row items-center justify-center">
              <Image src={AeroLogo} alt="Aerolab Logo" width={50} height={50} />
              <span className="px-4 font-semibold text-xl tracking-tight">
                {user.name}
              </span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => setNavfull(!navfull)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            {navfull ? 'active' : 'unactive'}
          </button>
        </div>
        <div
          className={
            navfull
              ? 'transform translate-x-0 w-full h-full block flex-grow lg:flex lg:items-center lg:w-auto'
              : 'absolute transform -translate-x-full duration-300'
          }
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block
                lg:mt-0 text-teal-200 text-xl hover:text-white mr-4"
              >
                {' '}
                Home
              </a>
            </Link>

            <a
              href="https://github.com/joelmatiasduran/aerolab-ch"
              target="_blank"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl hover:text-white mr-4"
              rel="noreferrer"
            >
              Code
            </a>

            <a
              href="/history"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl hover:text-white"
            >
              History
            </a>
          </div>
          <motion.div
            whileHover={{
              boxShadow: '0px 0px 40px #ffd900 ',
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-row items-center justify-center py-4 border hover:bg-white hover:text-yellow-500 rounded-lg"
          >
            <a href="#" className="text-3xl leading-none px-2 lg:mt-0">
              <span className="px-2">
                {user.points == 0 ? 'Add Points !!' : user.points}
              </span>
              <Image src={AeroCoin} alt="Coins" width={30} height={20} />
            </a>
          </motion.div>
        </div>
      </nav>
      <AddPoints points={user.points} user={user} />
    </>
  )
}
export default Navbar
