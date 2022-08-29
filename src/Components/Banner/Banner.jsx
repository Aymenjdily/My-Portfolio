import React from 'react'
import styles from '../../Styles/style'
import {FaInstagram} from "react-icons/fa"

const Banner = () => {
  return (
    <section className={`${styles.flexStart} flex-col sm:py-16 py-10`}>
        <h1 className='text-primary font-poppins font-bold ss:text-[50px] text-[35px]'>Follow me in instagram, i share my lifestyle as Developer there.</h1>
        <a href="https://www.instagram.com/aymen_jdily/">
          <button
              className='bg-primary flex flex-row items-center justify-center gap-5 p-2 px-5 font-poppins font-semibold capitalize text-[20px] mt-5 text-black'
          >
              <FaInstagram/>
              view my page
          </button>
        </a>
    </section>
  )
}

export default Banner