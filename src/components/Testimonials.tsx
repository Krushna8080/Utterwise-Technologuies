import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  content: string;
  author: {
    name: string;
    title: string;
    image?:  string;
  };
}

const testimonials: Testimonial[] = [
  {
    content: "We have very strong partnership with Utterwise team while developing mobile platform from concept to implementation. Attention to details and professional approach towards work really helped us deliver right. Working with Utterwise team was smooth and productive. We highly recommend them for the reason that they produce amazing results consistently.",
    author: {
      name: "Prashant Upasani",
      title: "CEO & Founder, Value Add Softtech and Systems",
      image: "https://www.utterwise.tech/wp-content/uploads/2022/04/Prashant-180x180.jpg"  // Added image URL here
      
      
    }
  },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
          <p className="mt-2 text-gray-600">What they have to say about us</p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="space-y-8">
              <blockquote className="text-lg md:text-xl text-gray-700 text-center italic">
                "{testimonials[0].content}"
              </blockquote>
              
              <div className="flex flex-col items-center space-y-4">
                {/* Circle for author image */}
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                  {testimonials[0].author.image && (
                    <img 
                      src={testimonials[0].author.image}
                      alt={testimonials[0].author.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[0].author.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[0].author.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-2.5 h-2.5 rounded-full bg-blue-600"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;