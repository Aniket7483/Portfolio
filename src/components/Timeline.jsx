import React from "react";
import "../App.css";

const timeline = [
  {
    year: "2025",
    title: "Graphic Designer/Web Developer",
    org: "Param Corporation",
    desc: "Builded and maintained websites, designed marketing materials, and enhanced brand identity."
  },
  {
    year: "2024",
    title: "Data Science Intern",
    org: "AI VARIANT",
    desc: "Deployeed machine learning models for predictive analytics and customer segmentation."
  },
  {
    year: "2024",
    title: "Bioinformatics Graduate",
    org: "Dr Babasaheb Ambedkar Marathwada University",
    desc: "Graduated with distinction, specializing in AI and data visualization."
  },
  
];

const Timeline = () => (
  <section id="timeline" className="timeline-section">
    <h2>My Journey</h2>
    <div className="timeline-grid">
      {timeline.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <span className="timeline-title">{item.title}</span>
            <span className="timeline-org">{item.org}</span>
            <p className="timeline-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;
