import React, { useState } from 'react'

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      comment: "The team made my Canadian student visa process incredibly smooth. Their expertise and guidance helped me secure admission to my dream university.",
      visa: "Student Visa"
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      comment: "Professional service from start to finish. They handled all the documentation for my work visa efficiently and kept me updated throughout the process.",
      visa: "Work Visa"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      comment: "Thanks to their excellent service, my family and I obtained our permanent residence visa without any hassle. Their attention to detail made all the difference.",
      visa: "Permanent Residence"
    },
    {
      id: 4,
      name: "David Chen",
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      comment: "I was impressed by their knowledge of immigration laws and their ability to handle complex cases. My visitor visa was approved in record time!",
      visa: "Visitor Visa"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0C3B34' }}>
            Making Success Stories
            <span className="block mt-2  text-transparent bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text" >Since 2011</span>
          </h1>

          {/* Simple Stats */}
          <div className="flex justify-center items-center gap-8 md:gap-16 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#0C3B34' }}>3000+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#0C3B34' }}>12+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#0C3B34' }}>170+</div>
              <div className="text-sm text-gray-600">Nationalities</div>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our 12+ years of existence in the UAE are backed by our expert consultancy and our client-centric approach. We have assisted 170+ nationalities in reaching their travel objectives.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mb-8">
          <div className="text-center">
            {/* Client Image */}
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-4"
              style={{ borderColor: '#D8C287' }}
            />

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" style={{ color: '#D8C287' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 text-lg mb-6 italic max-w-2xl mx-auto">
              "{testimonials[currentTestimonial].comment}"
            </p>

            {/* Client Info */}
            <h3 className="text-xl font-bold mb-1" style={{ color: '#0C3B34' }}>
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-gray-600 mb-2">{testimonials[currentTestimonial].country}</p>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#D8C287/20', color: '#0C3B34' }}>
              {testimonials[currentTestimonial].visa}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full shadow-md flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" style={{ color: '#0C3B34' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? 'w-6' : ''
                }`}
                style={{ backgroundColor: index === currentTestimonial ? '#D8C287' : '#D8C287/30' }}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full shadow-md flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" style={{ color: '#0C3B34' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Testimonials