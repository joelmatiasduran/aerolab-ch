import Link from 'next/link'
import Image from 'next/image'
import AeroLogo from '../assets/aerolab-logo.svg'
import AeroCoin from '../assets/icons/coin.svg'
import { motion } from 'framer-motion'

interface NavbarProps {
  user: [UserObj] | any
}

interface UserObj {
  points: number | null
  name: string
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
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
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Home
              </a>
            </Link>
            <Link href="/6766">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Code
              </a>
            </Link>
            <a
              href="/history"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              History
            </a>
          </div>
          <motion.div
            whileHover={{
              boxShadow: '0px 0px 40px #ffd900 ',
            }}
            className="flex flex-row items-center justify-center py-4 border hover:bg-white hover:text-yellow-500 rounded-lg"
          >
            <a href="#" className="text-3xl leading-none px-2 lg:mt-0">
              <span className="px-2">{user.points}</span>
            </a>
            <Image src={AeroCoin} alt="Coins" width={50} height={50} />
          </motion.div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
