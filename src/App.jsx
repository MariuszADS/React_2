// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import oslo from '../src/assets/img/72 hours in Oslo, Norway.jfif';

function Top() {
	return (
		<li id='list'>
			<h3>Miejsca wartę uwagi</h3>
			<h3>Wskazówki i porady</h3>
			<h3>Ruter #</h3>
			<h3>Kontakt</h3>
			<h3 id='black'>English  or </h3>
		</li>
	);
}

function App() {
	return (
		<div>
			<section id='nav'>
				<Top />
			</section>
		</div>
	);
}

export default App;
