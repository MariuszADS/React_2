import BackGround from './Components/BackGround';
import './App.css';
import BigLogo from './Components/BigLogo';
import NavbarFront from './Components/Navbar';


function App() {
	return (
		<div>

			<section>
				<BackGround />
			</section>
			<section className='bgc_logo'>
				<BigLogo />
				<p className='bgc_logo_par'>
					Aplikacja powstała w celu ułatwienia poruszania
					<br /> się komunikacją publiczną oraz uzupełnienie dla
					<br /> aplikacji Ruter # dla nowo odwiedzających rejon
					<br /> Oslo Kommune i nie tylko.
				</p>
			</section>
			<section>
			<NavbarFront />
			</section>
		</div>
	);
}

export default App;
