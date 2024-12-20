import BackGround from './Components/BackGround';
import './App.css';
import BigLogo from './Components/BigLogo';
// import ActionButton from './Components/ActionButton';
// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NavbarFront from './Components/Navbar';

function App() {
	return (
		<div>
			<BackGround />
			<section className='bgc_logo'>
				<BigLogo />
				<p className='bgc_logo_par'>
					Aplikacja powstała w celu ułatwienia poruszania
					<br /> się komunikacją publiczną oraz uzupełnienie dla
					<br /> aplikacji Ruter # dla nowo odwiedzających rejon
					<br /> Oslo Kommune
				</p>
				{/* <ActionButton>Eksploruj</ActionButton> */}
			</section>

			<section id='nav'>
				<li id='list'>
					<NavbarFront/>
				</li>
			</section>
			<Footer/>
		</div>
	);
}

export default App;
