
const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p style={{color: '#bae6fd', marginBottom: '1.5rem', fontSize: '1.08rem'}}>Download my latest resume and see my full experience, education, and skills.</p>
      <a
        className="hero-btn"
        href="/Aniket_Pandit.pdf"
        download
        style={{marginTop: '1.2rem', fontSize: '1.13rem'}}
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
