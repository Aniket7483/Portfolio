
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Email Marketing Prediction</h3>
          <p>Machine learning model to predict email open rates, boosting campaign efficiency for marketers. Built with Python, scikit-learn, and deployed with Streamlit.</p>
          <a href="https://github.com/Aniket7483/Email-Marketing-Campaign-Success-Prediction-" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Param Social Foundation Website</h3>
          <p>Designed and developed a full-featured, responsive website for a non-profit, including donation integration and event management. Built with React and Node.js.</p>
          <a href="https://aniket7483.github.io/Param-Social-Foundation/" target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>This interactive portfolio site showcases my skills, projects, and design sense. Features modern UI/UX, animations, and responsive design. Built with React and Vite.</p>
          <a href="https://github.com/Aniket7483/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Real and Fake News Detection</h3>
          <p>Created Real and fake news detection dashboard on streamlit using machine learning models getting an accuracy of 90 %</p>
          <a href="https://github.com/Aniket7483/Real-and-Fake-News-Detection" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
