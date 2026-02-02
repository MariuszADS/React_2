import './App.css';
import oslo from './assets/img/front_img/DSC_0140.JPG.JPG';
import BigLogo from './Components/BigLogo';
import NavbarFront from './Components/Navbar';
import Footer from './Components/Footer'

function App() {


	return (
		<div>
			<img className='BackGround_img' src={oslo} />
			<div className='BackGround_gray'/>
			<NavbarFront />
			<BigLogo />
			<Footer/>
		</div>
	);
}

export default App;
