import { Link } from 'react-router-dom';
import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import tog from '../assets/img/front_img_tog.JPG';
import trikk from '../assets/img/front_img_trikk.JPG';
import bus from '../assets/img/front_img_bus_2.JPG';
import tbane from '../assets/img/front_img_bane.JPG';
import Footer from '../Components/Footer';
import '../App.css'
import { useTranslation } from "react-i18next";



const Wskazowki_porady = () => {

	const {t} = useTranslation()
	return (
		<div className='linear-gradient'>
			<Navbar_white />
			<SmallLogo />
			<h3 className='main_header' >
				{t("important_tips")}
			</h3>

			<section className='flex-container-transport'>
				<div className='flex-item'>
					<img src={tbane} alt='Metro' className='transport-image' />
					<Link to='/metro' className='transport-caption'>
						{t("metro")}
					</Link>
					
				</div>
				<div className='flex-item'>
					<img src={trikk} alt='Trikk' className='transport-image' />
					<Link to='/trikk' className='transport-caption'>
						{t("tram")}
					</Link>
				</div>
				<div className='flex-item'>
					<img src={tog} alt='Pociąg' className='transport-image' />
					<Link to='/tog' className='transport-caption'>
						{t("train")}
					</Link>
				</div>
				<div className='flex-item'>
					<img src={bus} alt='Autobus' className='transport-image' />
					<Link to='/bus' className='transport-caption'>
						{t("bus")}
					</Link>
				</div>
			
			</section>
			
			<div className='none'>
			{/* <Footer/> */}
			</div>
			<Footer />
		</div>
	);
};

export default Wskazowki_porady;
