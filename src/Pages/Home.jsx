import React from 'react'
import { Intro, Navbar, Service } from '../Components'
import styles from '../Styles/style'

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
        <header className={`${styles.paddingX} ${styles.flexCenter} bg-primary border-2 border-black`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
        </header>

        <main className={`${styles.flexStart} bg-primary border-l-2 border-r-2 border-black`}>
          <div className={`${styles.boxWidth}`}>
            <Intro/>
          </div>
        </main>

        <article className={`${styles.paddingX} ${styles.flexStart} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Service/>
          </div>
        </article>
    </div>
  )
}

export default Home