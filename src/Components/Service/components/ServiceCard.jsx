import React,{ useState } from 'react'
import { CgArrowTopRight, CgArrowBottomRight } from "react-icons/cg"

const ServiceCard = ({ number, title, text }) => {
    const [Open, setOpen] = useState(false)
    return (
        <div className='flex flex-col p-6 w-full border-b-2 border-primary'>
            <div className='flex flex-row items-center justify-center'>
                <div className='flex flex-row flex-1 items-center justify-center'>
                    <h1 className='text-primary font-bold text-[60px]'>{ number }</h1>
                    <h2 className='ml-3 text-primary text-[35px] w-full capitalize'>{ title }</h2>
                </div>
                {
                    Open ? <CgArrowTopRight className='p-3 text-[50px] bg-primary rounded-full cursor-pointer duration-200' onClick={() => setOpen((prev) => !prev)}/> : <CgArrowBottomRight className='p-3 text-[50px] bg-primary rounded-full cursor-pointer duration-200' onClick={() => setOpen((prev) => !prev)}/>
                }
            </div>
            {
                Open 
                &&
                <div className='flex flex-row justify-start items-start'>
                    <p className='text-primary font-normal font-poppins mt-5'>
                        { text }
                    </p>
                </div>
            }
        </div>
    )
}

export default ServiceCard