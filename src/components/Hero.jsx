import HeroImg from '../assets/heroimg.jpg';
import { FaGithub } from "react-icons/fa";


export default function Hero() {
    const config  = {
        subtitle: 'Full Stack Developer',
        social: {
            github : 'https://github.com/GaneshMudaliar'
        }
    }


    return (
     <section className='flex flex-col md:flex-row px-5 pt-60 py-24 justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-blue text-6xl'>Hi, 

            <br/>
             I'm Ganesh Mudaliar 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-4'>
                <a href={config.social.github} className='pr-5 text-blue-500 hover:text-white mx-20'>
                <FaGithub size={40} /></a>
                
            </div>
       </div>
       {/* <img className='md:w-1/3 rounded-lg' src={HeroImg} /> */}
    </section>
    )
}
