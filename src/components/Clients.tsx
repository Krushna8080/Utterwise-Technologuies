import React from 'react';

const clients = [
  {
    name: 'ValueAdd Soft Tech',
    description: 'It is a technology services company providing services for product lifecycle management and digital transformation. They also have product offerings like Xirify, ASAP, ClientCare, etc.',
    logo: 'https://www.utterwise.tech/wp-content/uploads/2022/04/7yd66.png'
  },
  {
    name: 'SheerVal Systems',
    description: 'A technical consulting company specializing in infrastructure and Smart City projects.',
    logo: 'https://www.utterwise.tech/wp-content/uploads/2022/04/4r.png'
  },
  {
    name: 'Gervigreind Data Science',
    description: 'A product based company offering the product Itanta Analytics, a self serve, no code platform for manufacturing intelligence',
    logo: 'https://www.utterwise.tech/wp-content/uploads/2022/04/87j.png'
  },
  {
    name: 'A Payments Processing startup',
    description: 'A FinTech startup which offers end to end payment processing, risk management and a global stack for accepting payments.',
    logo: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Jnana Prabodhini',
    description: 'Jnana Prabodhini is a multifarious institution working in the fields of Education, Research, Rural Development, Stree Shakti Prabodhan, Youth Organisation, National Integration and Health.',
    logo: 'https://www.utterwise.tech/wp-content/uploads/2022/04/7y66-300x93.png'
  }
];

export default function Clients() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Our <span className="text-indigo-600">Trusted</span> Clients
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Working with industry leaders to deliver exceptional results
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative w-24 h-24 flex items-center justify-center bg-gray-50 rounded-full p-4 group-hover:bg-indigo-50 transition-colors duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}