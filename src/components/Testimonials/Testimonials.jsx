import React from 'react'
import Heading from '../Heading/Heading'
import testimonialsList from './TestimonialsList'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
const Testimonials = () => {


  console.log(testimonialsList)
  const renderTestimoninals = testimonialsList.map((customer) => {
    return (
      <div key={customer.id} className=' bg-zinc-200 w-40'>
        <div className='flex gap-5'>
          <img className=' h-[10vh] rounded-full' src={customer.icon} alt="" />
          <div>
            <h3>{customer.name}</h3>
            <p>{customer.username}</p>
            <p></p>
          </div>
        </div>
        <div><p>{customer.para}</p></div>
      </div>
    )
  })

  return (
    <section className="max-w-350 m-auto px-10 mt-16">
      <Heading highlight={"Customers"} text={"Sayings"} />


      <div className='flex gap-2 justify-end py-5'>
        <button className=' h-8 w-8 bg-zinc-200 flex justify-center items-center hover:cursor-pointer text-sm text-zinc-800 hover:bg-amber-600'>
          <FaLessThan />
        </button>
        <button className=' h-8 w-8 bg-zinc-200 flex justify-center items-center hover:cursor-pointer text-sm text-zinc-800 hover:bg-amber-600'>
          <FaGreaterThan />
        </button>

      </div>
      <div className=' flex gap-10'>
        {renderTestimoninals}
      </div>

    </section>
  )
}

export default Testimonials