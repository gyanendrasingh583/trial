import React from "react";
import Carousel from "react-bootstrap/Carousel";
import captcha from "../captcha.jpg";
import genre from "../genres.jpg";
import charger from "../charger.png";
import { Button } from "react-bootstrap";

const Projects = () => {
	return (
		<div className="Project-wrapper">
			<div className="Project-heading">
				<h1>Projects</h1>
			</div>
			<div className="Project-content">
				<Carousel>
					<Carousel.Item interval={1000}>
						<img className="project1" src={captcha} alt="First slide" />
						<Carousel.Caption>
							<h3
								className="slideCaption"
								href="https://github.com/ManuGupta9780/Ecommerce-website"
								title="View Project">
								Recommendation Sytem for Ecommerce Website
							</h3>
							<p className="slideMatter">
								Recommendation Sytem(using collaburative filtering) to recommend products based on users preferences.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img className="project3" src={charger} alt="Third slide" />
						<Carousel.Caption>
							<h3
								className="slideCaption"
								href="https://github.com/gyanendrasingh583/Unidirectional-Battery-Charger-using-DC-DC-SEPIC-converter"
								title="View Project">
								Unidirectional Battery Charger using SEPIC Converter
							</h3>
							<p className="slideMatter">
								Designed a unidirectional battery charger circuit using the DC-DC SEPIC converter feeding power from the grid employed with the charging current control.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Projects;
