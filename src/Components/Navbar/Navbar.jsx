import React, { useState } from 'react'
import { NavLinks, NavBtns } from './Api/Navbar'
import { close, menu } from '../../Assets'

const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <h1
                className='font-poppins capitalize font-bold sm:text-[26px] text-[20px] text-black'
            >
                aymen.
            </h1>

            <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
                {
                    NavLinks.map((NavLink,index) => (
                        <li
                            key={NavLink.id}
                            className={`font-poppins cursor-pointer font-normal text-[16px] ${index === NavLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black capitalize`}
                        >
                            <a 
                                href={`#${NavLink.id}`}
                            >
                                {NavLink.title}
                            </a>
                        </li>
                    ))
                }
            </ul>

            {
                NavBtns.map((NavBtn) => (
                    <button
                        type='button'
                        key={NavBtn.id}
                        className='font-poppins text-[16px] sm:flex hidden justify-center items-center border-2 border-black p-1 font-bold w-[130px] cursor-pointer'
                    >
                        {NavBtn.title}
                    </button>
                ))
            }

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img 
                    src={ Toggle ? close : menu } 
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain cursor-pointer' 
                    onClick={() => setToggle((prev) => !prev)}
                />
            </div>

            <div className={`${Toggle ? 'flex flex-col' : 'hidden'} p-6 bg-primary border-2 border-black absolute top-20 right-0 mx-4 my-2 min-w-[200px] sidebar`}>
                <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                    {
                        NavLinks.map((NavLink,index) => (
                            <li
                                key={NavLink.id}
                                className={`font-poppins cursor-pointer font-normal text-[16px] ${index === NavLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black capitalize`}
                            >
                                <a 
                                    href={`#${NavLink.id}`}
                                >
                                    {NavLink.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                {
                    NavBtns.map((NavBtn) => (
                        <button
                            type='button'
                            key={NavBtn.id}
                            className='mt-5 font-poppins capitalize justify-center items-center border-2 border-black font-bold p-1 cursor-pointer'
                        >
                            {NavBtn.title}
                        </button>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar