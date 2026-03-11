import React from 'react'

const Banner = (props) => {

    console.log(props.img)


    return (
    <div className='bg-zinc-300 h-[50vh] mt-20 flex justify-center items-center bg-cover bg-center bg-no-repeat relative' 
    style={{backgroundImage: `url(${props.img})`}}>
        <h2 className=' text-5xl   text-zinc-800 bg-white font-bold p-5 rounded-xl z-10'>{props.value}</h2>
        <div className=' absolute bg-black/40 inset-0'></div>
    </div>
  )
}

export default Banner