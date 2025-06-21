  
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      comment: "Classy Colours transformed our home with their amazing painting work. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      comment: "Professional service from start to finish. The team was punctual and did an excellent job.",
      rating: 5
    },
    {
      id: 3,
      name: "Lisa M.",
      comment: "Great attention to detail and very reasonable prices. Will definitely use them again.",
      rating: 4
    }
  ];

  return (
    <div className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {Array(testimonial.rating).fill().map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;