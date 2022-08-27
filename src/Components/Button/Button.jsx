import React from 'react'

const Button = ({ style, title }) => {
  return (
    <button className={`font-poppins uppercase font-normal items-center justify-center bg-black text-primary p-2 text-[22px] w-[180px] ${style}`}>
        {title}
    </button>
  )
}

export default Button