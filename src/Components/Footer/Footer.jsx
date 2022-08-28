import React from 'react'
import { NavLinks } from '../Navbar/Api/Navbar'
import styles from '../../Styles/style'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <section className={`w-full flex py-6 justify-between items-center ss:flex-row flex-col`}>
        <ul className='list-none flex flex-wrap justify-start items-start flex-1 gap-5'>
            {
                NavLinks.map((NavLink) => (
                    <li
                        className='list-none flex flex-col flex-wrap capitalize'
                        key={NavLink.id}
                    >
                        <a href={`#${NavLink.id}`}>
                            {NavLink.title}
                        </a>
                    </li>
                ))
            }
        </ul>
        <div className='flex-1 flex justify-end items-end flex-wrap gap-2 ss:mt-0 mt-8'>
            <a href="https://github.com/Aymenjdily">
                <FaGithub className='text-[25px] mr-7 cursor-pointer'/>
            </a>
            <a href="https://www.instagram.com/aymen_jdily/">
                <FaInstagram className='text-[25px] mr-7 cursor-pointer'/>
            </a>
            <a href="https://www.linkedin.com/in/aymenjdily/">
                <FaLinkedin className='text-[25px] mr-7 cursor-pointer'/>
            </a>
            <a href="https://wa.me/+380958259084">
                <FaWhatsapp className='text-[25px] ss:mr-7 mr-0 cursor-pointer'/>
            </a>
        </div>
    </section>
  )
}

export default Footer