import React from 'react'
import Heading from '../Heading/Heading'
import categories from './categoryList'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Category = () => {

    const renderCard = categories.map((card) => {
        return (
            // card
            <div key={card.id} className=' flex-1 basis-[300px] '>
                {/* card Image */}
                <div  className='flex justify-center w-full min-h-[20vh] relative' ><img className= 'h:35 md:h-45 absolute -bottom-10 ' src={card.img} alt="" /></div>

                {/* card Content  */}
                <div className='bg-zinc-200 pt-20 pb-5 px-5 rounded-2xl'>
                    <h3 className=' text-3xl font-bold  text-zinc-800'>{card.title}</h3> 
                    <p className=' text-zinc-700 mt-5 mb-10'>{card.description}</p>
                    <Link to={card.path}
                    className='bg-amber-500 text-white py-1 px-3 md:py-2 md:px-5 rounded-xl text-sm md:text-lg'
                    >
                        See All</Link>
                </div>
            </div>

        )
    })

    return (
        <section className='max-w-350 m-auto px-10 mt-16'>
            <Heading highlight={"Shop"} text={"by Category"} />

            <div className='flex flex-wrap justify-center gap-2 md:gap-5 '>
                {renderCard}
            </div>
            {/* category card   */}


        </section>
    )
}

export default Category