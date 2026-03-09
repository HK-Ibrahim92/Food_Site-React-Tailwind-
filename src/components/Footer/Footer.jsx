import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-zinc-200 min-h-[30vh] flex">
            <div className="max-w-350 m-auto px-10 grid grid-cols-2 lg:grid-cols-4 justify-center  gap-15 ">

                <div>
                    <h3 className='text-3xl font-bold'>Gr<span className='text-5xl font-bolder text-amber-500'>o</span>cify</h3>
                    <p className='text-sm md:text-lg text-zinc-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <p className='text-sm md:text-lg text-zinc-600 py-2'>2025 @ All Right Reserved</p>
                </div>
                <div>
                    <h3 className='text-lg md:text-2xl font-bold py-2'>Company</h3>
                    <ul>
                        <li className=' text-sm md:text-lg text-zinc-600'>About</li>
                        <li className=' text-sm md:text-lg text-zinc-600'>FAQs</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg md:text-2xl font-bold py-2'>Support</h3>
                    <ul>
                        <li className=' text-sm md:text-lg text-zinc-600'>Supprt Center</li>
                        <li className=' text-sm md:text-lg text-zinc-600'>Feedback</li>
                        <li className=' text-sm md:text-lg text-zinc-600'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg md:text-2xl font-bold py-2'>Stay Connected</h3>
                    <p className='text-zinc-600'>Lorem ipsum dolor sit amet.</p>
                    <div className=' flex mt-2 '>
                        <input className='bg-white p-2 round-lg focus:outline-none' type="email" name="email" id="email" placeholder='Email Address' />
                        <button className=' h-10 w-10 bg-amber-600 flex justify-center items-center round-lg hover:cursor-pointer'>{<FaGreaterThan />}</button>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer