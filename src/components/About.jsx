import AboutImg from '../assets/about.png';
import React from 'react'

const About = () => {
  const config  = {
    line1: 'Hi, My name is Ganesh Mudaliar from Ahmedabad, Full Stack Web developer.',
    line2:'I’m passionate about coding, problem-solving, and learning new technologies and exploring web development trends.',
    line3: 'I developed a solid foundation in both front-end and back-end technologies, including HTML, CSS, JavaScript, and frameworks like React and Node.js.'
}

return (

<section className='flex flex-col md:flex-row  px-6' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AboutImg} />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl mb-5 w-auto font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>

        
        </div>
    </div>
</section>

)

}

export default About;

