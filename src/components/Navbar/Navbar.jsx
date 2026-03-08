import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenu3 } from "react-icons/tb";
import Button from '../Button/Button';
const Navbar = () => {
    const [MobileMenu, setmobileMenu] = useState(false)
    const [IsScroll, setisScroll] = useState(false)
    const onToggle = () => {
        setmobileMenu(prev => !prev)
    }

    useEffect(() => {

        const handleScroll = () => {
            setisScroll(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header  >
            <nav className={`md:h-20 h-16 flex justify-between px-2 md:px-2 rounded-md  items-center  max-w-350 m-auto fixed top-0 left-0 right-0 bg-white z-30
                ${IsScroll ? 'shadow-md' : ""}`}>
                <h1 className='text-3xl font-bold'>Gr<span className='text-5xl font-bolder text-amber-500'>o</span>cify</h1>

                <ul className='  gap-15 md:flex hidden'>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="Home">Home</a></li>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="About">About</a></li>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="Speacility">Speacilty</a></li>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="Contact">Contact</a></li>
                </ul>

                <div className=' flex gap-3 items-center '>
                    <div className=' items-center border-2 py-2 px-3 rounded-full border-amber-500 md:flex hidden'>
                        <input type="text" name="search" id="search" placeholder='search' className='outline-none' />
                        <div className=' h-6 w-6 bg-amber-500 text-white rounded-full flex justify-center items-center'>

                            <IoSearch />
                        </div>

                    </div>
                    <FaHeart className='text-xl' />
                    <FaShoppingCart className='text-xl' />
                    <button className='flex md:hidden ml-5 text-2xl' onClick={onToggle} >{MobileMenu ? <GiHamburgerMenu /> : <TbMenu3 />} </button>

                </div>
                {/* Mobile Menu */}
                <ul
                    className={`gap-8 flex flex-col absolute shadow-2xl  top-20 -left-full bg-orange-200/50 backdrop-blur-xl p-5 items-center
                             md:hidden transform -translate-x-1/2 transition-all duration-500 rounded-xl
                              ${MobileMenu ? 'left-1/2' : ""}`}
                >
                    <li><a className='hover:text-amber-500 cursor-pointer' href="Home">Home</a></li>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="About">About</a></li>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="Speacility">Speacilty</a></li>
                    <li><a className='hover:text-amber-500 cursor-pointer' href="Contact">Contact</a></li>
                    <li>

                        <div className='flex items-center border-2 py-2 px-3 rounded-full border-amber-500 '>
                            <input type="text" name="search" id="search" placeholder='search' className='outline-none' />
                            <div className=' h-6 w-6 bg-amber-500 text-white rounded-full flex justify-center items-center'>

                                <IoSearch />
                            </div>

                        </div>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar