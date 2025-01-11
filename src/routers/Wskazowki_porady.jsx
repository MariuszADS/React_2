import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import tog from '../assets/img/De nye NSB-togene 1.jpg';
import trikk from '../assets/img/Public Transport in Oslo 2.jpg';
import bus from '../assets/img/Ruter AS, .jpg';
import tbane from '../assets/img/Oslo T-Bane Metro (1) 2.jpg';
// import frame from '../assets/img/Icon_Frame_bten.png'
// import frameTbane from '../assets/img/T-bane_szkielet.png'

const Wskazowki_porady = () => {
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
					<img src={bus} alt='Bus' className='transport-image'/>
					<p className='transport-caption'>Autobus (Bus)</p>
				</div>
				<div className='flex-item'>
					<img src={tog} alt='Bus' className='transport-image'/>
					<p className='transport-caption'>Pociąg (Tog)</p>
				</div>
				<div className='flex-item'>
					<img src={trikk} alt='Bus' className='transport-image'/>
					<p className='transport-caption'>Tramwaj (Trikk)</p>
				</div>
				<div className='flex-item'>
					<img src={tbane} alt='Bus' className='transport-image'/>
					<button className='transport-caption'>Metro (T-bane)</button>
					{/* <p className='transport-caption'>Metro (T-bane) <img className='arrowBtn' src={frame}></img></p> */}
					
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Wskazowki_porady;
