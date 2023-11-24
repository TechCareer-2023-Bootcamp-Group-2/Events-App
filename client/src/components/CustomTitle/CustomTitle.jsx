import React from 'react'

const CustomTitle = ({borderedTitle}) => {
  return (
    <div className='flex justify-center pt-[50px] pb-[20px] md:pt-10 md:pb-5 '>
        <h1 className='text-[40px] sm:text-[50px] md:text-[75px] uppercase decoration-red-950 text-[#DDDDDD] select-none'>{borderedTitle}</h1>
    </div>
  )
}

export default CustomTitle