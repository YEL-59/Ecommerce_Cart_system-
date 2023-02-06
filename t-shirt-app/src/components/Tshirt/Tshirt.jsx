import React from 'react'

const Tshirt = ({tshirt}) => {
    const {picture, name,price}=tshirt
  return (
    <div className='border text-center rounded'>
        <img className='h-[200px] mx-auto p-2' src={picture} alt="" />
        <h2 className='font-bold '>{name}</h2>
        <h4 className='text-[#ff9800] font-bold mb-2'>price:{price}</h4>
        <button className='bg-teal-300 rounded p-2 px-9 w-full'>Add To Cart</button>

    </div>
  )
}

export default Tshirt