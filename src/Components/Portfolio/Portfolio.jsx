import React from 'react'
// import sanityClient from "../../Auth/client"
import styles,{layout} from '../../Styles/style'
import { Projects } from './Api/Portfolio'
import { FaGithub } from "react-icons/fa"

const Portfolio = () => {

    // const [project, setProject] = useState([])
    // useEffect(() => {
    //     sanityClient.fetch(`*[_type == "project"]{
    //         name,date,description,tags,projectType,link
    //     }`).then((data)=>setProject(data)).catch(console.error)
    // }, []);
    
    return (
        <section className={`${styles.flexStart} ${styles.paddingY} flex-col`} id="portfolio">
            <div className='flex flex-col'>
                <div className='h-[10px] bg-black w-[100px]'/>
                <h1 className='my-5 uppercase text-black font-bold md:text-[70px] text-[40px] font-poppins flex-1'>
                    selected <br/> works
                </h1>
                <p className='font-normal font-poppins text-black'>
                    Take a look of some of my projects | <br/> have done.
                </p>
            </div>
            <div className={`${styles.flexCenter} flex-col w-full gap-20 mt-10`}>
                {
                    Projects.map((project,index)=>(
                        <div className={`${layout.section} w-full border-2 border-black`} key={project.id}>
                            <div className={`${layout.sectionImg}`}>
                                <img
                                    src={project.img}
                                    alt="" 
                                    className='w-[100%] h-[100%] object-contain'    
                                />
                            </div>

                            <div className={`${layout.sectionImg}`}>
                                <div className='p-5'>
                                    <h2 className='font-poppins capitalize font-semibold text-[20px]'>{project.type}</h2>
                                    <h1 className='my-2 font-poppins font-bold capitalize text-[35px] text-black'>{project.title}</h1>
                                    <p className='font-normal font-poppins text-black'>- {project.date}</p>
                                    <p className='font-normal font-poppins text-black my-2'>{project.description}</p>
                                    <div className='flex flex-row mt-5'>
                                        <a href={project.link}>
                                            <FaGithub className='text-black mr-4 text-[30px] cursor-pointer'/>
                                        </a>
                                        {/* <FaLink className='text-black mr-4 text-[30px] cursor-pointer'/> */}
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    ))
                }
                
            </div>
        </section>
    )
}

export default Portfolio