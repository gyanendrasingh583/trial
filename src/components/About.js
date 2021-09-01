import React from "react";
import profilepic from "../profilepic.jpg";
const About = () => {
	return (
		<div className="About-wrapper">
			<div className="About-heading">
				<h1>About Me</h1>
			</div>
			<div className="About-row">
				<div className="About-column">
					<div className="About-column1">
						<img className="About-image" src={profilepic} alt="image" />
					</div>
				</div>
				<div className="About-column">
					<div className="About-Matter">
						<p>
							I am Gyanendra Singh, 4th year student at IIT BHU, pursuing B.Tech in
							Electrical Engineering. I am from Mathura(Uttar Pradesh), India. My
							core interest lies in computer science technologies, specially
							web-development and Machine Learning. Also, I am well versed in
							data structures and Algorithms in C++. Along with it, I am also an
							open-source contributor. <br />
							<br /> I am enthusiastic about breaking into fields I haven't
							ventured in so far and would love to be a part of any project that
							helps me develop.
							<br />
							Apart from these, I am a drone flyer. I love robotics and listening
							to music.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
/*data-aos="fade-up"
					data-aos-anchor-placement="top-center"
					data-aos-duration="1000"
					data-aos-offset="320"
					*/
