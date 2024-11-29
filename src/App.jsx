import BackGround from './Components/BackGround';
import './App.css';
// import { NavItem } from './Components/NavItem';
import BigLogo from './Components/BigLogo';
import ActionButton from './Components/ActionButton';
import Navbar from './Components/Navbar';

function App() {
	return (
		<div>
			
			<BackGround />
			<section className='bgc_logo'>
				<BigLogo />
				<p className='bgc_logo_par'>
					Aplikacja powstała w celu ułatwienia poruszania<br/> się komunikacją publiczną oraz uzupełnienie dla<br/> aplikacji Ruter # dla nowo odwiedzających rejon<br/> Oslo Kommune
				</p>
				<ActionButton>Eksploruj</ActionButton>
			</section>

			

			<section id='nav'>
				<li id='list'>
				<Navbar id=''/> 
					
				</li>
			</section>
		</div>
	);
}

export default App;
