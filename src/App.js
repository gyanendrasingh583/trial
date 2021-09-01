import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Element } from "react-scroll";

function App() {
	return (
		<>
			<div className="mainApp">
				<Particles
					className="particles-canvas"
					params={{
						particles: {
							number: {
								value: 30,
								density: {
									enable: true,
									value_area: 900,
								},
							},
							shape: {
								type: "circle",
								stroke: {
									width: 8,
									color: "#f9ab00",
								},
							},
						},
					}}
				/>
				<Navbar />
				<div className="Sections">
					<Element id="/" name="/">
						<Header />
					</Element>

					<Element id="/about" name="/about">
						<About />
					</Element>

					<Element id="/education" name="/education">
						<Education />
					</Element>

					<Element id="/skills" name="/skills">
						<Skills />
					</Element>

					<Element id="/projects" name="/projects">
						<Projects />
					</Element>

					<Element id="/contact" name="/contact">
						<Contact />
					</Element>
				</div>
			</div>
		</>
	);
}

export default App;
