import BackGround from './Components/BackGround';
import './App.css';
import { NavItem } from './Components/NavItem';
import BigLogo from './Components/BigLogo';



function App() {
	return (
		<div>
			<BigLogo/>
			<BackGround />
			<section id='nav'>
				<li id='list'>
					<NavItem><h4>Miejsca wartę uwagi</h4></NavItem>
					<NavItem><h4>Wskazówki i porady</h4></NavItem>
					<NavItem><h4>Ruter #</h4></NavItem>
					<NavItem><h4>Kontakt</h4></NavItem>
				</li>
			</section>
		</div>
	);
}


export default App;
