
const Contact = () => (
	<section id="contact">
		<h2>Contact</h2>
		<p style={{color: '#bae6fd', marginBottom: '1.5rem', fontSize: '1.08rem'}}>Let’s work together or just say hi! I’m always open to new opportunities and collaborations.</p>
		<form className="contact-form" action="mailto:your.email@example.com" method="POST" encType="text/plain">
			<input type="text" name="name" placeholder="Your Name" required />
			<input type="email" name="email" placeholder="Your Email" required />
			<textarea name="message" placeholder="Your Message" required></textarea>
			<button type="submit">Send</button>
		</form>
	</section>
);

export default Contact;
