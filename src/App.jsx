import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('')
  const [color2, setColor2] = useState('')
  const [color3, setColor3] = useState('')
  const handleClick = () => {
    setColor('bg-red-500')
    setTimeout(() => {
      setColor2('bg-yellow-500')
      setColor('')
    }, 5000)
    setTimeout(() => {
      setColor3('bg-green-500')
      setColor2('')
    }, 10000)
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-4'>
        <div onClick={handleClick} className={`${color} w-50 h-50 rounded-full cursor-pointer shadow-xl transition-all duration-300 `}>

        </div>
        <div className={`${color2} w-50 h-50 rounded-full cursor-pointer shadow-xl transition-all duration-300 `}>

        </div>
        <div className={`${color3} w-50 h-50 rounded-full cursor-pointer shadow-xl transition-all duration-300 `}>

        </div>
      </div>
    </div>
  )
}

export default App
