import React from 'react';

const testimonials = [
  {
    quote: "Nexus Tools has transformed the way I work!",
    author: "Jane Doe",
  },
  {
    quote: "An indispensable platform for my business.",
    author: "John Smith",
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div className="container mx-auto flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg m-4 p-6 rounded-lg w-80">
            <p className="italic mb-4">"{testimonial.quote}"</p>
            <div className="text-right font-semibold">- {testimonial.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
