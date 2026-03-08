import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section className='max-w-350 m-auto  flex flex-col md:flex-row pt-10 mt-16 md:pt-10  md:h-[85vh] justify-center items-center px-2'>
            {/* Hero Content */}
            <div className='flex-col justify-center items-center flex-1'>
               <div className=' bg-amber-100 text-amber-600 rounded-full w-50 py-1 px-5 mb-5'><p>Export Best Quality...</p></div> 
               <h1 className=' text-4xl md:text-6xl  font-bold'>Tasty Organic <span className=' text-amber-600'>Fruits</span> & <span className=' text-amber-500'>Vaggies </span>In Your City</h1>
           <p className=' mt-4 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, porro.</p>
           <Button value={"Shop Now"} ></Button>
            </div>  
            {/* Hero Image */}
            <div className='flex-1'>
                <img src={Grocery} alt="" className='h:[20vh] md:h-[75vh]' />
            </div>
        </section>
    )
}

export default Hero