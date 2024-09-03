import websiteImg1 from '../assets/foodapp.png';
import websiteImg2 from '../assets/ELearning.png';
import websiteImg3 from '../assets/Travel.png';

export default function Project() {

    const config = {
        projects : [
            {
                id:1,
                image: websiteImg1,
                description: 'Food Ecommerce website, built with React',
                link: 'https://github.com/GaneshMudaliar/Tastyfoods'
            },
            {
                id:2,
                image: websiteImg2,
                description: 'ELearning website, built with React',
                link: 'https://github.com/GaneshMudaliar/E-Learning--App'
            },
            {
                id:3,
                image: websiteImg3,
                description: 'Travel Booking website , built with React',
                link: 'https://github.com/GaneshMudaliar/Travel_Agency_App'
            }
        ]
    }

    return (
    
    <section id='projects' 
    className="flex  flex-col py-20 px-5 justify-center text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React and Tailwind CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative' key={project.id}>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div>
                            <p className='text-center px-5 py-5'>{project.description}</p>
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