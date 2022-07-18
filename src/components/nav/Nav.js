import React, { useState } from "react";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineStar,
	AiOutlineAppstoreAdd,
	AiOutlineMessage,
} from "react-icons/ai";

function Nav() {
	const [activeNav, setActiveNav] = useState("#home");

	// const changeActiveLink = () => {
	// 	setActiveNav("");
	// };

	return (
		<div>
			<nav>
				<a
					href="#home"
					className={activeNav === "#home" ? "active" : ""}
					onClick={() => setActiveNav("#home")}
				>
					<AiOutlineHome />
				</a>
				<a
					href="#about"
					className={activeNav === "#about" ? "active" : ""}
					onClick={() => setActiveNav("#about")}
				>
					<AiOutlineUser />
				</a>
				<a
					href="#experience"
					className={activeNav === "#experience" ? "active" : ""}
					onClick={() => setActiveNav("#experience")}
				>
					<AiOutlineStar />
				</a>
				<a
					href="#testimonials"
					className={activeNav === "#testimonials" ? "active" : ""}
					onClick={() => setActiveNav("#testimonials")}
				>
					<AiOutlineAppstoreAdd />
				</a>
				<a
					href="#contact"
					className={activeNav === "#contact" ? "active" : ""}
					onClick={() => setActiveNav("#contact")}
				>
					<AiOutlineMessage />
				</a>
			</nav>
		</div>
	);
}

export default Nav;
