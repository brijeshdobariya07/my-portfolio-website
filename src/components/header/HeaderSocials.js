import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function HeaderSocials() {
	return (
		<div className="header__socials">
			<a href="https://linkedin.com" rel="noreferrer" target="_blank">
				<AiOutlineLinkedin />
			</a>
			<a href="https://github.com" rel="noreferrer" target="_blank">
				<AiOutlineGithub />
			</a>
		</div>
	);
}

export default HeaderSocials;
