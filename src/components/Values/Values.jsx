import React from 'react'
import Heading from '../Heading/Heading'
import BasketFruitImage from '../../assets/basket-full-vegetables.png'
import values from './value'


const Values = () => {

    const leftValues = values.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex  md:flex-row-reverse gap-5  items-center'>
                <div>
                    <div className='bg-amber-500 h-12 w-12 text-2xl text-white flex justify-center items-center rounded-full'>{<item.icon />}</div>
                </div>
                <div className=' md:text-right '>
                    <h3 className='text-xl md:text-2xl font-bold mt-2'>{item.title}</h3>
                    <p className='text-sm md:text-lg'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = values.slice(2, 4).map(item => {
        return (
            <div  key={item.id} className='flex  gap-5  items-center'>
                <div>
                    <div className='bg-amber-500 h-12 w-12 text-2xl text-white flex justify-center items-center rounded-full'>{<item.icon />}</div>
                </div>
                <div >
                    <h3 className='text-xl md:text-2xl font-bold mt-2'>{item.title}</h3>
                    <p className='text-sm md:text-lg'>{item.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section className='max-w-350 m-auto px-10 mt-16'>
            <Heading highlight={"Our"} text={"Value"} />
            {/* main-content */}
            <div className='flex md:flex-row justify-center items-center gap-10 md:gap-10'>
                {/* left-content  */}
                <div className='flex flex-col gap-2 md:gap-[40vh]'>
                    {leftValues}
                </div>
                {/* center-image  */}
                <div>
                    <img className='hidden md:flex md:h-[50vh] w-xl' src={BasketFruitImage} alt="" />
                </div>
                {/* right-content  */}
                <div className='flex flex-col gap-2 md:gap-[40vh]'>
                    {rightValues}
                </div>
            </div>
        </section>
    )
}

export default Values