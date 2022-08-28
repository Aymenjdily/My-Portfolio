import React from 'react'
import styles,{ layout } from '../../Styles/style'
import Button from '../Button/Button'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { profile } from '../../Assets'
import { IoIosArrowDown } from "react-icons/io"
import ButtonCercle from '../ButtonCercle/ButtonCercle'
import { Link } from 'react-scroll'

const Intro = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`} id='home'>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className={`${layout.sectionInfo}`}>
                <div className='h-[10px] bg-black w-[200px]'/>
                <div className='flex flex-row items-center justify-between w-full'>
                    <h1 className='my-5 uppercase text-black font-bold md:text-[70px] text-[40px] font-poppins flex-1 tracking-widest'>
                        i'm aymen a <br/>
                        frontend developer
                    </h1>
                    <div className='ss:flex hidden md:ml-20 ml-0 md:mb-0 mb-8'>
                        <Link to='service'>
                            <ButtonCercle bg="bg-black" FirstTitle={<IoIosArrowDown/>} textColor="text-primary" size="text-[80px]"/>
                        </Link>
                    </div>
                </div>
                <p className='font-poppins text-black text-[20px] '>
                    Motivated web developer with experience creating custom websites <br/> and platforms through react JS and <br/> its ecosystem,strong and creative.
                </p>
                <Link to='contact'>
                    <Button style={'mt-10'} title="let's talk"/>
                </Link>
                <div className='flex flex-col mt-20'>
                    <h3 className='font-poppins font-bold text-[22px]'>Follow me</h3>
                    <div className='flex flex-wrap flex-row mt-3 w-full justify-between'>
                        <a href="https://github.com/Aymenjdily">
                            <FaGithub className='text-[35px] mr-7 cursor-pointer'/>
                        </a>
                        <a href="https://www.instagram.com/aymen_jdily/">
                            <FaInstagram className='text-[35px] mr-7 cursor-pointer'/>
                        </a>
                        <a href="https://www.linkedin.com/in/aymenjdily/">
                            <FaLinkedin className='text-[35px] mr-7 cursor-pointer'/>
                        </a>
                        <a href="https://wa.me/+380958259084">
                            <FaWhatsapp className='text-[35px] mr-7 cursor-pointer'/>
                        </a>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
)

export default Intro