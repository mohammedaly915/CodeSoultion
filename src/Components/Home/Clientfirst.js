import React from 'react'

const ClientsSection = () => {
    const clients = ['Client A', 'Client B', 'Client C', 'Client D'];

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Leading Companies</h2>
          <p className="text-gray-700 mb-12">
            Our expertise has helped businesses grow and succeed worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-2xl font-semibold text-gray-800">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default ClientsSection