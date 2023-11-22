import React from 'react'

const CustomTitle = ({borderedTitle, title}) => {
  return (
    <div className='py-[10px] md:py-[20px]'>
        <h1 className='ml-5 text-[50px] md:text-[100px] uppercase decoration-red-950 text-[#DDDDDD] select-none'>{borderedTitle}</h1>
        <h1 className='text-center text-[30px] md:text-[60px] uppercase'>{title}</h1>
    </div>
  )
}

export default CustomTitle