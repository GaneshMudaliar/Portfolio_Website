import websiteImg1 from '../assets/foodapp.png';
import websiteImg2 from '../assets/ExpenseTrack.png';
import websiteImg3 from '../assets/Travel.png';

export default function Project() {

    const config = {
        projects : [
                        {
                id:1,
                image: websiteImg2,
                title :"Expense Tracker With EMI Calculator (FrontEnd)",
                description: 'The Expense Tracker with EMI Calculator is a responsive and user-friendly web application built using React.js and Tailwind CSS. It allows users to manage their daily expenses efficiently and simultaneously calculate their EMIs (Equated Monthly Installments) for better financial planning.',
                technologies :  "Tech Stack: ReactJS,Tailwind CSS, Responsive Design  ",
                link: 'https://github.com/GaneshMudaliar/ExpenseTracker-With-EMICalculator'
            },
            {
                id:2,
                image: websiteImg3,
                title :"Travel Booking App (Frontend)",
                description: 'The Travel Booking App is a modern and responsive frontend application built using React.js and Tailwind CSS, designed to help users search, explore, and book travel experiences like flights, hotels, and holiday packages. It emphasizes a clean UI, fast performance, and mobile-first responsiveness.',
                technologies :  "Tech Stack: ReactJs, Tailwind CSS ",
                link: 'https://github.com/GaneshMudaliar/Travel_Agency_App'
            },

            {
                id:3,
                image: websiteImg1,
                title :"A Full Stack Food Ordering Platform",
                description: 'A full-stack Food Ecommerce Website built with the MERN Stack (MongoDB, Express.js, React, Node.js). The platform allows users to browse food products, add them to a cart, and securely complete purchases with integrated Stripe payment. Key features include user authentication with JWT, dynamic cart functionality.',
                technologies : "Tech Stack: React, Node.js, Express.js, MongoDB, Stripe API.",
                link: 'https://github.com/GaneshMudaliar?tab=repositories'
            }
        ]
    }

    return (
    
    <section id='projects' 
    className="flex  flex-col py-20 px-5 justify-center text-blue">
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
                            <div className='flex justify-center mt-3'>
                                <a className='w-auto h-auto px-4 rounded-lg py-2 bg-black text-white' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
    )
}