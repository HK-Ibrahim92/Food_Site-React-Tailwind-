import React from 'react'
import Heading from '../Heading/Heading'
import BasketFruitImage from '../../assets/basket-full-vegetables.png'
const Values = () => {

const leftValues=(()=>{
    
})

    return (
        <section className='max-w-350 m-auto px-10 mt-16'>
            <Heading highlight={"Our"} text={"Value"} />
            {/* main-content */}
            <div className='flex justify-center'>
                {/* left-content  */}
                <div>

                </div>
                {/* center-image  */}
                <div>
                    <img className='h:[20-vh] md:h-[60vh]' src={BasketFruitImage} alt="" />
                </div>
                {/* right-content  */}
                <div>

                </div>
            </div>
        </section>
    )
}

export default Values