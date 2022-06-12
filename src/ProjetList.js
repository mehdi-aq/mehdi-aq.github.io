import React from 'react';
import Projet from './Projet.js';
import './projet.css';

let intervalID;

function handleClick(arg) {
	const projetList = document.getElementById("projet-list");
	const speed = 5;
	let finalPosition;
	if (arg === 'next') {
		finalPosition = projetList.scrollLeft + document.getElementsByClassName('projet')[0].clientWidth * 2;
	}
	else if (arg === 'prev') {
		finalPosition = projetList.scrollLeft - document.getElementsByClassName('projet')[0].clientWidth * 2;
	}

	clearInterval(intervalID);
	intervalID = setInterval(() => {
		if (arg === 'next') {
			if (projetList.scrollLeft < finalPosition + speed) {
				projetList.scrollLeft += speed;
			}
			else {
				clearInterval(intervalID);
			}
		}
		else if (arg === 'prev') {
			if (projetList.scrollLeft > finalPosition - speed) {
				projetList.scrollLeft -= speed;
			}
			else {
				clearInterval(intervalID);
			}
		}
	});
}

export default class ProjetList extends React.Component {
	render() {
		return (
			<div className="projet-container">
			<div className="projet-seek projet-list" onClick={handleClick.bind(this, 'prev')}>❮</div>
			<div id="projet-list" className="projet-list">
				<Projet 
					link="https://mehdi-aq.github.io/portefolio-zelda.github.io"
					title="Zelda Breath of the wild Landing Page"
					description="Landing Page du jeu Zelda Botw"
					imageURL="img/title.png"
				/>
				<Projet
					link="https://mehdi-aq.github.io/fcc_markdown_previewer"
					title="Markdow Live Previewer"
					description="A simple markdow editor with a live previewer"
					imageURL="img/md.png"
				/>
				<Projet link="https://mehdi-aq.github.io/fcc_calculator"
					title="Simple Calculator"
					description="A simple calculator in Js"
					imageURL="img/calculator-icon.png"
				/>
				<Projet
					link="https://mehdi-aq.github.io/fcc_drum_machine"
					title="Drum Machine"
					description="Virtual drum machine"
					imageURL="img/fcc_drum_machine_icon.png"
				/>
				<Projet
					link="https://mehdi-aq.github.io/fcc_stupid_clock"
					title="Stupid Clock"
					description="Simple count down"
					imageURL="img/clock.jpeg"
				/>
				<Projet
					link="https://mehdi-aq.github.io/fcc_random_quote_machine"
					title="Random Quote Machine"
					description="Display a quote randomly picked"
					imageURL="img/quote.png"
				/>
				<Projet 
					link="https://mehdi-aq.github.io/product_landing_page"
					title="Product Landing Page"
					description="..."
					imageURL="img/marker_icon.jpeg"
				/>
				<Projet 
					link="https://mehdi-aq.github.io/fcc_technical_documentation_page"
					title="Technical Documentation Page"
					description="..."
					imageURL="img/book_icon.png"
				/>
				<Projet
					link="https://mehdi-aq.github.io/fcc_survey_form"
					title="Basic Survey Form"
					description="..."
					imageURL="img/validation_icon.png"
				/>
			</div>
			<div className="projet-seek projet-list" onClick={handleClick.bind(this, 'next')}>❯</div>
			</div>
		);
	}
}