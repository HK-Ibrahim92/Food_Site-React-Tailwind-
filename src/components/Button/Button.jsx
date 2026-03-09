import React from 'react'

const Button = (props) => {
  return (
   <>
        <button className='bg-amber-500 text-white py-1 px-3 md:py-2 md:px-5 rounded-xl text-sm md:text-lg' >{props.value}</button>
   </>
   
  )
}

export default Button