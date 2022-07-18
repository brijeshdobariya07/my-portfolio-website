import React from "react";
import { AiOutlineStar, AiOutlineFolder } from "react-icons/ai";
import ME from "../../assets/about-img.png";

function About() {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2 className="sectionTitle">About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<AiOutlineStar className="about__icon" />
							<h5>Experience</h5>
							<small>4 months</small>
						</article>

						<article className="about__card">
							<AiOutlineFolder className="about__icon" />
							<h5>Projects</h5>
							<small>10+ Projects</small>
						</article>
					</div>

					<p>
						Passionate developer having good expertise in software development
						building functional websites and web applications.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
