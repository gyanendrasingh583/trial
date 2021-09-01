import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import user from "../user-solid.svg";
import mapic from "../map-marker-alt-solid.svg";
import mailpic from "../envelope-solid.svg";
import copyp from "../copyright-solid.svg";

const Contact = () => {
	return (
		<div className="Contact-wrapper">
			<div className="Contact-heading">
				<h1>Contact Me</h1>
			</div>
			<div className="Contact-row">
				<div className="Contact-column">
					<div className="left">
						<h3>Get in Touch</h3>
						<div className="Contact-user">
							<div className="Contact-user1">
								<img src={user} alt="user-image" width="40px" height="40px" />
							</div>
							<div className="Contact-user2">
								<h4>Name</h4>
								<p>Gyanendra Singh</p>
							</div>
						</div>

						<div className="Contact-user">
							<div className="Contact-user1">
								<img src={mapic} alt="map-image" width="40px" height="40px" />
							</div>
							<div className="Contact-user2">
								<h4>Address</h4>
								<p>Mathura(UP), India-281204</p>
							</div>
						</div>
						<div className="Contact-user">
							<div className="Contact-user1">
								<img
									src={mailpic}
									alt="mail-image"
									width="40px"
									height="40px"
								/>
							</div>
							<div className="Contact-user2">
								<h4>Email</h4>
								<p>singhgyanendra583@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="Contact-column">
					<div className="right">
						<Form>
							<h3 className="Contact-for-heading">Message Me</h3>
							<Form.Group controlId="formGroupName">
								<Row>
									<Col>
										<Form.Control placeholder="Name" />
									</Col>
									<Col>
										<Form.Control placeholder="Subject" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group controlId="formGroupEmail">
								<Form.Control type="Email" placeholder="Enter email" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Control
									as="textarea"
									placeholder="Enter Message"
									rows={3}
								/>
							</Form.Group>

							<Button variant="warning" type="submit">
								Send Message
							</Button>
						</Form>
					</div>
				</div>
			</div>
			<div className="Contact-Footer">
				<div className="Contact-Footer-content">
					<h6>
						Created by Gyanendra Singh |
						<img src={copyp} alt="image" width="20px" height="20px" /> 2021 All
						rights reserved
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Contact;
/*
<Form.Row>
								<Form.Col>
									<Form.Label>Name</Form.Label>
									<Form.Control placeholder="Full Name" />
								</Form.Col>
								<Form.Col>
									<Form.Label>Subject</Form.Label>
									<Form.Control placeholder="Subject" />
								</Form.Col>
							</Form.Row>
							*/
