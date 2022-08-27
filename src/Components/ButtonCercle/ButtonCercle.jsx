import React from 'react'
import styles from '../../Styles/style'

const ButtonCercle = ({ bg, FirstTitle, textColor, SecondTitle, size, margin}) => {
  return (
    <button className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full ${bg} cursor-pointer ${margin}`}>
        <div className={`flex flex-col items-center justify-center text-center ${textColor} ${size} uppercase font-bold`}>
            <p>
                {FirstTitle}
            </p>
            <p>
                {SecondTitle}
            </p>
        </div>
    </button>
  )
}

export default ButtonCercle