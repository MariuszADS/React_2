// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import oslo from '../src/assets/img/72 hours in Oslo, Norway.jfif';
// import { DATA_FROM } from './data_with';

function Button_nav({ children }) {
	return <button>{children}</button>;
}

function BackGround() {
	return (
		<div id='Welcome_web_page'>
			<img src={oslo} />
		</div>
	);
}

function App() {
	return (
		<div>
			<div id='shadow'>
				<BackGround />
				<section id='nav'>
					<li id='list'>
						<Button_nav>Miejsca wartę uwagi</Button_nav>
						<Button_nav>Wskazówki i porady</Button_nav>
						<Button_nav>Ruter #</Button_nav>
						<Button_nav>Kontakt</Button_nav>
						<Button_nav id='black'>English or </Button_nav>
					</li>
				</section>
			</div>
		</div>
	);
}

export default App;
