import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import tog from '../assets/img/De nye NSB-togene 1.jpg';
import trikk from '../assets/img/Public Transport in Oslo 2.jpg';
import bus from '../assets/img/Ruter AS, .jpg';
import tbane from '../assets/img/Oslo T-Bane Metro (1) 2.jpg';
import TipsContentMetro from '../Components/TipsContentMetro';
import TipsContentTramwaj from '../Components/TipsContentTramwaj';
import TipsContentPociag from '../Components/TipsContentPociag';
import TipsContentAutobus from '../Components/TipsContentAutobus';
import { useState } from 'react';
// import 'App.css'

const Wskazowki_porady = () => {

	const [showComponent, setshowComponent] = useState(false);
	const [showComponent_1, setshowComponent_1] = useState(false);
	const [showComponent_2, setshowComponent_2] = useState(false)
	const [showComponent_3, setshowComponent_3] = useState(false)

	return (
		<div className='linear-gradient'>
			<SmallLogo />
			<Navbar_white />
			{/* <image className='frameTbane' src={frameTbane}/> */}
			<h3 className='main_header'>
				Ważne <span>wskazówki</span> oraz <span>rady</span> które pomogą w
				zwiedzaniu Oslo oraz mape wojewódźtw dostarczaną przez aplikacje Ruter:
			</h3>
			<section className='flex-container-transport'>
				<div className='flex-item'>
				<img src={tbane} alt='Metro' className='transport-image' />
					<button
						className='transport-caption'
						style={{background: showComponent? 'linear-gradient(rgb(11, 3, 3), rgb(0, 0, 0))': null,}}
						onClick={() => setshowComponent(!showComponent)}>
						{showComponent ? 'Metro (T-bane)' : 'Pokaż Metro (T-bane)'}
					</button>
				</div>
				<div className='flex-item'>
					<img src={trikk} alt='trikk' className='transport-image' />
					<button 
					className='transport-caption'
					style={{background:showComponent_1? 'linear-gradient(rgb(11, 3, 3), rgb(0, 0, 0))': null}}
					onClick={()=> setshowComponent_1(!showComponent_1)}>
					{showComponent_1 ? 'Tramwaj (trikk)' : 'Pokaż Tramwaj (trikk)'}
					</button>
				</div>
				<div className='flex-item'>
					<img src={tog} alt='tog' className='transport-image' />
					<button 
					className='transport-caption'
					style={{background:showComponent_2? 'linear-gradient(rgb(11, 3, 3), rgb(0, 0, 0))': null}}
					onClick={()=> setshowComponent_2(!showComponent_2)}>
					{showComponent_2 ? 'Pociąg (tog)' : 'Pokaż Pociąg (tog)'}
					</button>
				</div>
				<div className='flex-item'>
				<img src={bus} alt='Bus' className='transport-image' />
				<button className='transport-caption'
				style={{background:showComponent_3? 'linear-gradient(rgb(11, 3, 3), rgb(0, 0, 0))': null}}
				onClick={()=> setshowComponent_3(!showComponent_3)}>{showComponent_3 ? 'Autobus (bus)' : 'Pokaż Autobus (bus)'}</button>
					
				</div>
			</section>
			{showComponent && <TipsContentMetro />}
			{showComponent_1 && <TipsContentTramwaj />}
			{showComponent_2 && <TipsContentPociag />}
			{showComponent_3 && <TipsContentAutobus />}
			<Footer />
		</div>
	);
};

export default Wskazowki_porady;
