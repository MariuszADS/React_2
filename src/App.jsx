import BackGround from './Components/BackGround';
import './App.css';
import { NavItem } from './Components/NavItem';
import BigLogo from './Components/BigLogo';



function App() {
	return (
		<div>
			<BackGround />
			<section id='nav'>
				<li id='list'>
					<NavItem>Miejsca wartę uwagi</NavItem>
					<NavItem>Wskazówki i porady</NavItem>
					<NavItem>Ruter #</NavItem>
					<NavItem>Kontakt</NavItem>
				</li>
			</section>
			<section>
			<BigLogo/>
			
			</section>
		</div>
	);
}


export default App;
