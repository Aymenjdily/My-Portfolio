import React from 'react'

const Button = ({ margin, title,width,func,Value}) => {
  return (
    <button className={`font-poppins uppercase font-normal items-center justify-center bg-black text-primary py-2 px-5 text-[22px] ${margin}`}
    onClick={func} value={Value}
    >
        {title}
    </button>
  )
}

export default Button