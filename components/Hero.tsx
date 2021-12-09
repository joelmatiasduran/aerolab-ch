import React from 'react'
import Image from 'next/image'
import AeroHero from '../assets/header-x1.png'

// interface HeroProps {

// }

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative top-0 left-0 pb-32 bg-aero-blue min-h-full md:min-h-screen lg:min-h-full">
        <Image src={AeroHero} alt="Headphones" layout="responsive" />
        <div className="absolute lg:top-32 md:top-20 top-10  left-0 container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero-wrapper grid grid-cols-4 md:grid-cols-12 gap-8 items-center">
            <div className="hero-text col-span-6">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl max-w-xs md:max-w-2xl text-gray-900 leading-tight">
                Don not listen to what they say, Go See
              </h1>
              <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8"></hr>
              <p className="text-gray-800 text-base leading-relaxed pt-12 md:mt-8 font-semibold">
                Your ultimate e-commerce site. Carries all the information you
                need while redeeming your favorite products
              </p>
              <div className="get-app flex space-x-5 pt-10 justify-center md:justify-start">
                <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
                  <div className="logo">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="419.955"
                      height="512"
                      viewBox="0 0 419.955 512"
                    >
                      <g transform="translate(-46.022)">
                        <path d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z" />
                        <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p className=" text-xs text-gray-600">Download on the</p>
                    <p className=" text-xs font-semibold text-gray-900">
                      Apple Store
                    </p>
                  </div>
                </button>
                <button className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
                  <div className="image">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="436.057"
                      height="469.847"
                      viewBox="0 0 436.057 469.847"
                    >
                      <g transform="translate(-16.896)">
                        <path
                          d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                          fill="#2196f3"
                        />
                        <path
                          d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                          fill="#4caf50"
                        />
                        <path
                          d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                          fill="#ffc107"
                        />
                        <path
                          d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                          fill="#f44336"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p className="text-xs text-gray-600">Download it from</p>
                    <p className="text-xs font-semibold text-gray-900">
                      Google play
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero
