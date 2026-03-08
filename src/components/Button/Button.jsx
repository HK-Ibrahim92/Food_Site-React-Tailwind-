import React from 'react'

const Button = (props) => {
    console.log("props",props)
  return (
   <>
        <button className='bg-amber-500 text-white py-2 px-5 rounded-xl' >{props.value}</button>
   </>
   
  )
}

export default Button