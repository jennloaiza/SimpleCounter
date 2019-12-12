//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const Six = Math.floor(counter / 1000000);
	const Five = Math.floor(counter / 100000);
	const Four = Math.floor(counter / 10000);
	const Three = Math.floor(counter / 1000);
	const Two = Math.floor(counter / 100);
	const One = Math.floor(counter / 10);
	console.log(Six, Five, Four, Three, Two, One);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={One}
			digitTwo={Two}
			digitThree={Three}
			digitFour={Four}
			digitFive={Five}
			digitSix={Six}
		/>,
		document.querySelector("#app")
	);
}, 100);
