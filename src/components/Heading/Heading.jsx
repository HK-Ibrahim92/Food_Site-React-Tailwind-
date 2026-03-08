import React from 'react'

const Heading = (props) => {
    return (
        <div className='py-10 w-fit mx-auto' >
            <h2 className=' md:text-5xl text-3xl font-bold '>
                <span className=' text-amber-500'>{props.highlight} </span> {props.text} 
            </h2>
            <div className='w-20 md:w-35 h-1 bg-amber-400 mt-2 md:mt-4 ml-auto'></div>
        </div>
    )
}

export default Heading