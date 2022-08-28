import React,{useRef} from 'react'
import styles from '../../../Styles/style'
import { close } from '../../../Assets'
import Button from '../../Button/Button'
import emailjs from '@emailjs/browser';

const ContactForm = ({ remove }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dzajmw9', 'template_no5vbva', form.current, 'user_eedMAOL6IgXrXnrA2Xrfm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <fieldset className={`absolute bg-primary border-2 border-black text-black ${styles.flexStart} ${styles.paddingY} ${styles.paddingX} flex-col gap-5 z-[10] ss:w-max w-full`}>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 w-full">
                <div className='flex flex-row w-full justify-between'>
                    <h1 className='font-poppins font-bold text-[30px] capitalize'>message me</h1>
                    <button
                    onClick={remove}>
                        <img src={close} className="h-[28px] w-[28px] object-contain"/>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <label htmlFor="" className='font-poppins capitalize font-bold'>full name : </label>
                    <input type="text" name="name" id="name" className='ss:w-[400px] w-full bg-primary border-2 border-black p-2 font-poppins' placeholder='Your name...'/>
                </div>

                <div className='flex flex-col gap-3 w-full'>
                    <label htmlFor="" className='font-poppins capitalize font-bold'>email : </label>
                    <input type="email" name="email" id="email" className='ss:w-[400px] w-full bg-primary border-2 border-black p-2 font-poppins' placeholder='Your email...'/>
                </div>

                {/* <div className='flex flex-col gap-3'>
                    <label htmlFor="" className='font-poppins capitalize font-bold'>subject : </label>
                    <input type="text" name="name" id="name" className='w-[400px] bg-primary border-2 border-black p-2 font-poppins' placeholder='Your subject...'/>
                </div> */}

                <div className='flex flex-col gap-3 w-full'>
                    <label htmlFor="" className='font-poppins capitalize font-bold'>message : </label>
                    <textarea type="text" name="message" id="message" className='ss:w-[400px] w-full h-[150px] bg-primary border-2 border-black p-2 font-poppins' placeholder='Your email...'/>
                </div>

                <Button style="mt-5" title="send" Value="Send"/>
            </form>
        </fieldset>
    )
}

export default ContactForm