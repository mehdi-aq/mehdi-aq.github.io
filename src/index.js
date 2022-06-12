import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjetList from './ProjetList.js';
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
				<ProjetList />
			</section>
		</div>
		)
	}
}
	
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);