import React from "react";
import { BsPatchCheckFill as BsPatchCheck } from "react-icons/bs";

function Experience() {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2 className="sectionTitle">Skills</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheck />
							<h4>HTML</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>CSS</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>JS</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>React.js</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Redux.js</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Bootstrap</h4>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Node.Js</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Express.js</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Java</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>C/C++</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>MongoDB</h4>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>SQL</h4>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
