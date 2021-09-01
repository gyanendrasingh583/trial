import React from "react";
import Typed from "react-typed";
import gitp from "../github-brands.svg";
import linkp from "../linkedin-in-brands.svg";
import facep from "../facebook-f-brands.svg";
import insta from "../instagram-brands.svg";
import twit from "../twitter-brands.svg";
import devp from "../dev-brands.svg";

const Header = () => {
	return (
		<div className="header-wraper">
			<div className="main-info">
				<h1>Hello there! I am</h1>
				<div className="myname">Gyanendra Singh</div>
				<h2>And I'm a:</h2>
				<Typed
					className="typed-text"
					strings={[
						"Student",
						"Software Engineer",
						"Open-source Enthusiast",
						"Drone flyer",
					]}
					typeSpeed={25}
					backSpeed={70}
					loop
				/>
				<div className="Header-media">
					<div className="Header-img">
						<a href="https://github.com/gyanendrasingh583">
							<img src={gitp} alt="image" width="40px" height="40px" />
						</a>
					</div>
					<div className="Header-img">
						<a href="https://www.linkedin.com/in/gyanendra-singh-743b39186/">
							<img src={linkp} alt="image" width="40px" height="40px" />
						</a>
					</div>
					<div className="Header-img">
						<a href="https://www.facebook.com/profile.php?id=100008753411627">
							<img src={facep} alt="image" width="40px" height="40px" />
						</a>
					</div>
					<div className="Header-img">
						<a href="https://www.instagram.com/serator__ctx/?hl=en/">
							<img src={insta} alt="image" width="40px" height="40px" />
						</a>
					</div>
					<div className="Header-img">
						<a href="https://twitter.com/Gyanend85762752">
							<img src={twit} alt="image" width="40px" height="40px" />
						</a>
					</div>
					<div className="Header-img">
						<a href="https://dev.to/gyanendrasingh583">
							<img src={devp} alt="image" width="40px" height="40px" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
