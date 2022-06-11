import React from 'react';
import ReactDOM from 'react-dom/client';
import Projet from './Projet.js';
import './style.css';

class Root extends React.Component {
	render() {
		return (
		<div>
			<section className="section-main">
				<h1>Mehdi ABD AL QADIR</h1>
				<h2>Développeur web</h2>
				<section className="section-intro">
					<p className="phrase-intro">
					Développeur dans l'âme, autodidacte et passionné depuis <strong>10 ans !</strong><br/>
					Je suis très <strong>motivé</strong> et <strong>autonome</strong>. Je mets à contribution mes compétences pour votre entreprise en alternance afin d'obtenir un titre professionnel de niveau 5.
					</p>
					<a className="button" href="#section-projet">Voir mes projets</a>
					</section>
					<nav>
						<a className="button" href="CV_DOUAH_MEHDI.pdf">Voir CV</a>
						<a className="button" href="https://gitlab.com/users/mehdi_aq/projects">gitLab</a>
						<a className="button" href="https://douahmehdi.itch.io/">itch.io</a>
					</nav>
			</section>
			<section id="section-projet" className="section-projet">
				<h1>Mes Projets</h1>
				<div className="projet-list">
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
			</section>
		</div>
		)
	}
}
	
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);