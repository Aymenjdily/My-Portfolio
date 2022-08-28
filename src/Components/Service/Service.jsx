import React from 'react'
import styles,{ layout } from '../../Styles/style'
import ButtonCercle from '../ButtonCercle/ButtonCercle'
import ServiceCard from './components/ServiceCard'
import { services } from './Api/Service'
import { Link } from 'react-scroll'

const Service = () => {
  return (
    <section className={layout.section} id='service'>
        <div className={layout.sectionInfo}>
            <div className='h-[10px] bg-primary w-[100px]'/>
            <h1 className='my-5 uppercase text-primary font-bold md:text-[70px] text-[40px] font-poppins flex-1'>
                services | <br/>
                offer
            </h1>
            <p className='font-normal font-poppins text-primary'>
                I will help you with finding a solution and <br/>
                solve your problems.
            </p>
            <div className="ss:flex hidden">
                <Link to='contact'>
                    <ButtonCercle bg={"bg-primary"} margin="mt-5" FirstTitle="let's" SecondTitle={"talk"} size="text-[20px]" textColor={"text-black"} />
                </Link>
            </div>
        </div>
        <div className={`flex flex-1 flex-col justify-center items-center`}>
            {
                services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        number={service.number}
                        title={service.title}
                        text={service.text}
                    />
                ))
            }
        </div>
        <div className="ss:hidden flex justify-center items-center">
                <ButtonCercle bg={"bg-primary"} margin="my-10" FirstTitle="let's" SecondTitle={"talk"} size="text-[25px]" textColor={"text-black"} />
            </div>
    </section>
  )
}

export default Service