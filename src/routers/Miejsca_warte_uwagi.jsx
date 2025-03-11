import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import { Carousel } from '../Components/Carousel';
import {slides} from "../data/caruselData.json"


const Miejsca_warte_uwagi = () => {
	return (
		<div className='linear-gradient'>
			<SmallLogo/>
			<Navbar_white/>
			<div className='flex-container-miejsca'>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
			<Carousel data={slides}>
				<h2>Lorem</h2>
				<p>Id sint magna proident magna esse dolore ad</p>
			</Carousel>
				</div>
				<div className='flex-container-paragraph'>
					<p>Culpa consequat cillum in aliqua aute exercitation velit. Lorem ullamco eu aliquip Lorem consectetur do consectetur ea non deserunt fugiat.</p>
			<Footer />
					 </div>
			{/* <div className='linear-gradient'/> */}
		</div>
	);
};

export default Miejsca_warte_uwagi;
