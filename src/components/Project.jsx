import websiteImg1 from '../assets/foodapp.png';
import websiteImg2 from '../assets/ELearning.png';
import websiteImg3 from '../assets/video.png';

export default function Project() {

    const config = {
        projects : [
            {
                id:1,
                image: websiteImg1,
                title :"A Full Stack Food Ordering Platform",
                description: 'A full-stack Food Ecommerce Website built with the MERN Stack (MongoDB, Express.js, React, Node.js). The platform allows users to browse food products, add them to a cart, and securely complete purchases with integrated Stripe payment. Key features include user authentication with JWT, dynamic cart functionality.',
                technologies : "Tech Stack: React, Node.js, Express.js, MongoDB, Stripe API.",
                link: 'https://github.com/GaneshMudaliar?tab=repositories'
            },
            {
                id:2,
                image: websiteImg2,
                title :"A Full Stack E-Learning Platform",
                description: 'A MERN Stack based eLearning Course Purchasing App that allows users to browse and purchase online courses. The app features a secure user registration and login system, a catalog of available courses, an interactive course detail page, and a smooth checkout process with Stripe payment integration.',
                technologies :  "Tech Stack: React, Node.js, Express.js, MongoDB, Stripe API. ",
                link: 'https://github.com/GaneshMudaliar/Full-Stack-E-Learning-Platform'
            },
            {
                id:3,
                image: websiteImg3,
                title :"A Full Stack Video Chat  Platform",
                description: 'A MERN Stack based Video Chat Application that allows users to initiate real-time video calls with one or more participants. The app features secure user authentication, dynamic video streaming, and a responsive UI for easy communication. Built using WebRTC for video and audio streaming, it integrates with Socket.io for real-time communication.',
                technologies :  "Tech Stack: React, Node.js, Express.js, MongoDB, WebRTC, Socket.io. ",
                link: 'https://github.com/GaneshMudaliar?tab=repositories'
            }
        ]
    }

    return (
    
    <section id='projects' 
    className="flex  flex-col py-20 px-5 justify-center text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl mb-5 w-[150px] font-bold">Projects</h1>
                {/* <p>These are some of my best projects. I have built these with React and Tailwind CSS. Check them out.</p> */}
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative' key={project.id}>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div>
                          <h3 className='text-center mt-3 text-bold'>{project.title}</h3>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <p className='text-center my-2'>{project.technologies}</p>
                            <div className='flex justify-center'>
                                <a className='w-auto h-auto px-4 rounded-lg py-2 bg-blue-500 text-white' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
    )
}