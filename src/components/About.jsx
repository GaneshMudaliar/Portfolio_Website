import AboutImg from '../assets/about.png';
import React from 'react'

const About = () => {
  const config  = {
    line1: 'Hi, My name is Ganesh Mudaliar. I am a Front End Web developer. I built beautiful Websites with React.js , Tailwind CSS',
    line2: 'I am proficient in Frontend skills like Html, Css, Tailwind CSS, Javascript, React.js, Redux, Redux Tool Kit and many more.'
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
        
        </div>
    </div>
</section>

)
''
}

export default About;

