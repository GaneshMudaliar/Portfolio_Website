import React from 'react';

const Contact = () => {
  const config = {
    email: 'mudaliarganesh858@gmail.com',
    phone: '9824284391',
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white to-blue-50 text-gray-800 py-20 px-6 md:px-12"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out if you want to collaborate or just say hi 👋
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href={`mailto:${config.email}`}
              className="text-blue-700 hover:underline"
            >
              {config.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <a
              href={`tel:${config.phone}`}
              className="text-blue-700 hover:underline"
            >
              {config.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
