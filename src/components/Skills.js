import React from "react";
import Card from "./Card";
import { Button } from "react-bootstrap";
import Skilldata from "./Skilldata";

function primecard(val) {
	return <Card img={val.img} title={val.title} link={val.link} />;
}

const Skills = () => {
	return (
		<div className="Skill-wrapper">
			<div className="Skill-heading">
				<h1>Skills</h1>
			</div>
			<div className="Skill-images">{Skilldata.map(primecard)};</div>
		</div>
	);
};

export default Skills;
/*
<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={}} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				*/
