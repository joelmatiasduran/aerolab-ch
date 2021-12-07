import Link from 'next/link'
import Image from 'next/image'
import AeroLogo from '../assets/aerolab-logo.svg'

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-indigo-700 text-white p-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <a className="flex flex-row items-center justify-center">
              <Image
                src={AeroLogo}
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <span className="px-4 font-semibold text-xl tracking-tight">
                A-commerce
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
              href="https://aerolab.co/"
              target="_blank"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              rel="noreferrer"
            >
              Aerolab
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              0
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
