
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1>
        Hi, I'm Aniket{' '}
        <span role="img" aria-label="wave" className="wave-hand">👋</span>
      </h1>
      <p className="hero-subtitle">
        Data Scientist | Web Developer | Designer
      </p>
      <p style={{maxWidth: 540, margin: '1.5rem auto 0', color: '#bae6fd', fontSize: '1.15rem', fontWeight: 400}}>
        I build data-driven solutions and beautiful web experiences. Passionate about blending analytics, creativity, and technology to solve real-world problems. Let’s create something amazing together!
      </p>
      <a className="hero-btn" href="#projects" style={{marginTop: '2.2rem'}}>See My Work</a>
      <a className="hero-btn" href="#contact" style={{marginTop: '1rem', background: 'linear-gradient(90deg,#0ea5e9 0%,#38bdf8 100%)', color: '#fff'}}>Contact Me</a>
    </section>
  );
};

export default Hero;
