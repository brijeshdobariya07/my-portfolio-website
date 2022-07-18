import React from "react";
import {
	AiOutlineMail,
	AiOutlineGithub,
	AiOutlineLinkedin,
} from "react-icons/ai";

function Contact() {
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2 className="sectionTitle">Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<AiOutlineMail />
						<h4>Email</h4>
						<h5>dobariyabrijesh07@gmail.com</h5>
						<a
							href="mailto:dobariyabrijesh07@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>

					<article className="contact__option">
						<AiOutlineGithub />
						<h4>Github</h4>
						<h5>brijeshdobariya07</h5>
						<a
							href="https://github.com/brijeshdobariya07"
							target="_blank"
							rel="noreferrer"
						>
							Check me on Github
						</a>
					</article>

					<article className="contact__option">
						<AiOutlineLinkedin />
						<h4>LinkedIn</h4>
						<h5>Brijesh Dobariya</h5>
						<a
							href="https://www.linkedin.com/in/brijesh-dobariya-04b7861aa/"
							target="_blank"
							rel="noreferrer"
						>
							Let's Connect
						</a>
					</article>
				</div>

				{/* <form action="">
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						id="message"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form> */}
			</div>
		</section>
	);
}

export default Contact;
