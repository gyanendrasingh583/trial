import React from "react";
import logo from "../whitelogo.png";
//import { Link, Scroll } from "react-scroll";
import * as Scroll from "react-scroll";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const ScrollLink = Scroll.Link;

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
			<div className="container">
				<ScrollLink className="navbar-brand" to="main">
					<h2 className="logo">Gyanendra Singh</h2>
				</ScrollLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<ScrollLink
								className="nav-link"
								to="/"
								smooth={true}
								duration={1000}>
								Home <span className="sr-only">(current)</span>
							</ScrollLink>
						</li>
						<li className="nav-item">
							<ScrollLink
								className="nav-link"
								to="/about"
								smooth={true}
								duration={1000}>
								About me
							</ScrollLink>
						</li>
						<li className="nav-item">
							<ScrollLink
								className="nav-link"
								to="/education"
								smooth={true}
								duration={1000}>
								Education
							</ScrollLink>
						</li>
						<li className="nav-item">
							<ScrollLink
								className="nav-link"
								to="/skills"
								smooth={true}
								duration={1000}>
								Skills
							</ScrollLink>
						</li>

						<li className="nav-item">
							<ScrollLink
								className="nav-link"
								to="/projects"
								smooth={true}
								duration={1000}>
								Projects
							</ScrollLink>
						</li>
						<li className="nav-item">
							<ScrollLink
								className="nav-link"
								to="/contact"
								smooth={true}
								duration={1000}>
								Contact
							</ScrollLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
