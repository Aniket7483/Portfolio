import React from "react";
import "../App.css";

const testimonials = [
  {
    name: "Shubhangi U.",
    text: "Aniket is a rare blend of technical skill and creative vision. He delivered our project ahead of schedule and exceeded expectations!",
    title: "HR, Param Social Foundation"
  },
  {
    name: "Rahul M.",
    text: "Working with Aniket was a fantastic experience. His data insights and web solutions helped us grow our business.",
    title: "Operations Manager, Param Corporation"
  },
  {
    name: "Avi S.",
    text: "Aniket’s attention to detail and passion for design shine through in every project. Highly recommended!",
    title: "Administrator, AI VARIANT"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <h2>Testimonials</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p className="testimonial-text">“{t.text}”</p>
          <div className="testimonial-author">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-title">{t.title}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
