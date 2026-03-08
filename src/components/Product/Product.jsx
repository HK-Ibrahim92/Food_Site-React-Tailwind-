import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Category from '../Category/Category'

const Product = () => {
    const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"]
    const [activeTab, setactiveTab] = useState("All")
    return (
        <section className='max-w-350 m-auto px-10 mt-16'>
            <Heading highlight={"Our"} text={"Products"} />


            {/* Tabs */}

            <div className=' flex gap-3 justify-center'>
                {categories.map(Category => {
                    console.log(Category == activeTab)
                    return (
                        <button key={Category} className={`px-5 py-2 bg-zinc-300 rounded-lg${Category == activeTab ? 'bg-amber-500' : ""} `}>{Category}</button>
                    )
                })}
            </div>
        </section>
    )
}

export default Product