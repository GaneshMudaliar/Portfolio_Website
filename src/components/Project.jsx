import websiteImg1 from '../assets/foodapp.png';
import websiteImg2 from '../assets/ExpenseTrack.png';
import websiteImg3 from '../assets/Travel.png';

export default function Project() {
  const config = {
    projects: [
      {
        id: 1,
        image: websiteImg2,
        title: 'Expense Tracker With EMI Calculator (FrontEnd)',
        description:
          'The Expense Tracker with EMI Calculator is a responsive and user-friendly web application built using React.js and Tailwind CSS. It allows users to manage their daily expenses efficiently and simultaneously calculate their EMIs (Equated Monthly Installments) for better financial planning.',
        technologies: 'Tech Stack: ReactJS, Tailwind CSS, Responsive Design',
        link: 'https://github.com/GaneshMudaliar/ExpenseTracker-With-EMICalculator',
      },
      {
        id: 2,
        image: websiteImg3,
        title: 'Travel Booking App (Frontend)',
        description:
          'The Travel Booking App is a modern and responsive frontend application built using React.js and Tailwind CSS, designed to help users search, explore, and book travel experiences like flights, hotels, and holiday packages. It emphasizes a clean UI, fast performance, and mobile-first responsiveness.',
        technologies: 'Tech Stack: ReactJS, Tailwind CSS',
        link: 'https://github.com/GaneshMudaliar/Travel_Agency_App',
      },
      {
        id: 3,
        image: websiteImg1,
        title: 'A Full Stack Food Ordering Platform',
        description:
          'A full-stack Food Ecommerce Website built with the MERN Stack (MongoDB, Express.js, React, Node.js). The platform allows users to browse food products, add them to a cart, and securely complete purchases with integrated Stripe payment. Key features include user authentication with JWT, dynamic cart functionality.',
        technologies: 'Tech Stack: React, Node.js, Express.js, MongoDB, Stripe API',
        link: 'https://github.com/GaneshMudaliar?tab=repositories',
      },
    ],
  };

  return (
    <section id="projects" className="py-20 px-5 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-600 inline-block pb-2">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {config.projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm flex-grow mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm font-mono text-blue-600 mb-4">{project.technologies}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
