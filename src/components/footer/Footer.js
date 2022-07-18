import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
	return (
		<footer>
			<a href="#" className="footer__logo">
				BRIJESH
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				{/* <li>
					<a href="#services">Services</a>
				</li> */}
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://github.com/brijeshdobariya07">
					<AiOutlineGithub />
				</a>
				<a href="https://www.linkedin.com/in/brijesh-dobariya-04b7861aa/">
					<AiOutlineLinkedin />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
