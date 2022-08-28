import React,{useState}from 'react'
import styles from '../../Styles/style'
import Button from '../Button/Button'
import ContactForm from './Components/ContactForm';

const Contact = () => {
  const [Open, setOpen] = useState(false);
  return (
    <section className={`${styles.flexCenter} flex-col min-h-[70vh] relative`} id="contact">
        <h1 className='font-poppins text-center text-black ss:text-[50px] text-[40px] font-bold'>Keep in touch with me <br/> Say Hi!</h1>
        <Button title="start a conversation" style="mt-5" func={() => setOpen((prev) => !prev)}/>
        {
          Open ? <ContactForm remove={() => setOpen((prev) => !prev)}/> : <div/>
        }
    </section>
  )
}

export default Contact