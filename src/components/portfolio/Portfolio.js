import React from "react";
import IMG1 from "../../assets/quizapp.jpg";
import IMG2 from "../../assets/commenty-redux.jpg";
import IMG3 from "../../assets/linkedin-clone.jpg";

function Portfolio() {
	const portfolioData = [
		{
			id: "1",
			title: "Online Quiz System (Node-Express-MongoDB) Application",
			img: IMG1,
			githubUrl: "https://github.com/brijeshdobariya07/online-quiz-system",
			liveDemoUrl: "https://onquiz.herokuapp.com",
		},
		{
			id: "2",
			title: "CommnetUI React-Redux (Fully CRUD in Reduxjs)",
			img: IMG2,
			githubUrl: "https://github.com/brijeshdobariya07/commenty-redux",
			liveDemoUrl: "https://commenty-redux.netlify.app/",
		},
		{
			id: "3",
			title: "LinkedIn Clone (React, Firebase)",
			img: IMG3,
			githubUrl: "https://github.com/brijeshdobariya07/linkedin-clone",
			liveDemoUrl: "https://linkedin-clone-brijesh.netlify.app/",
		},
	];

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2 className="sectionTitle">Portfolio</h2>

			<div className="container portfolio__container">
				{portfolioData.map((item) => {
					return (
						<article className="portfolio__item" key={item?.id}>
							<div className="portfolio__item-image">
								<img src={item?.img} alt="" />
							</div>
							<h3>{item?.title}</h3>
							<div className="portfolio__item-cta">
								<a href={item?.githubUrl} className="btn">
									Github
								</a>
								{item?.liveDemoUrl && (
									<a
										href={item?.liveDemoUrl}
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
									>
										Live Demo
									</a>
								)}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Portfolio;
