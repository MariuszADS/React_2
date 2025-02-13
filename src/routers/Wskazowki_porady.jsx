import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import tog from '../assets/img/De nye NSB-togene 1.jpg';
import trikk from '../assets/img/Public Transport in Oslo 2.jpg';
import bus from '../assets/img/Ruter AS, .jpg';
import tbane from '../assets/img/Oslo T-Bane Metro (1) 2.jpg';
import TipsContent from '../Components/TipsContentAutobus';
import { useState } from 'react';

const Wskazowki_porady = () => {
	const [showComponent, setshowComponent] = useState(false);
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
					<img src={bus} alt='Bus' className='transport-image' />
					<button
						className='transport-caption'
						style={{
							background: showComponent
								? 'linear-gradient(rgb(11, 3, 3), rgb(0, 0, 0))'
								: null,
						}}
						onClick={() => setshowComponent(!showComponent)}>
						{showComponent ? 'Autobus (Bus)' : 'Pokaż Autobus (Bus)'}
					</button>
				</div>
				<div className='flex-item'>
					<img src={tog} alt='Bus' className='transport-image' />
					<button className='transport-caption'>Pociąg (Tog)</button>
				</div>
				<div className='flex-item'>
					<img src={trikk} alt='Bus' className='transport-image' />
					<button className='transport-caption'>Tramwaj (Trikk)</button>
				</div>
				<div className='flex-item'>
					<img src={tbane} alt='Bus' className='transport-image' />
					<button className='transport-caption'>Metro (T-bane)</button>
					{/* <p className='transport-caption'>Metro (T-bane) <img className='arrowBtn' src={frame}></img></p> */}
				</div>
			</section>
			{showComponent && <TipsContent />}
			<Footer />
		</div>
	);
};

export default Wskazowki_porady;
