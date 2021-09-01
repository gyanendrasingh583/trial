import React from "react";

function Card(props) {
	return (
		<div className="Card">
			<a href={props.link} data-toggle="tooltip" title={props.title}>
				<img
					src={props.img}
					alt="image"
					href={props.link}
					className="Card_img"
				/>
			</a>
		</div>
	);
}
export default Card;
