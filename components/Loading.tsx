import React from 'react'
import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'

const Loading: React.FC = () => {
  const elementottie = useRef<HTMLDivElement>(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: elementottie.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/images/loading.json'),
    })
  }, [elementottie])
  return (
    <>
      <div className="flex flex-1 justify-center items-center min-h-screen bg-black text-white">
        <div
          className="elementottie h-full w-full items-center justify-center text-center"
          ref={elementottie}
        ></div>
      </div>
    </>
  )
}
export default Loading
