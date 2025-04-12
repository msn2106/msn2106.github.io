import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";
const footer = () => {
	return (
		<footer>
			<div className="footer__copyright">
				<div className="footer__socials">
					<a href="https://github.com/msn2106">
						<BsGithub />
					</a>
					<a href="https://leetcode.com/u/msn2106/">
						<BsInstagram />
					</a>
					<a href="https://www.linkedin.com/in/msn2106/">
						<BsLinkedin />
					</a>
				</div>
				<small>&copy;Mayank Singh. All rights reserved</small>
			</div>
		</footer>
	);
};

export default footer;
