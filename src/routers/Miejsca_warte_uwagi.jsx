import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import { Carousel } from '../Components/Carousel';
import {sognsvann} from "../data/caruselData_00.json";
import {nordmarka} from "../data/caruselData_01.json";
import {forgner_park} from "../data/caruselData_02.json";
import {ekebergparken} from "../data/caruselData_03.json";
import {bygdoy} from "../data/caruselData_04.json";
import {wyspy_oslo} from "../data/caruselData_05.json";
import {holmenkollen} from "../data/caruselData_06.json"
import {tryvann_vinterpark} from "../data/caruselData_07.json";


const Miejsca_warte_uwagi = () => {
	return (
		<div className='linear-gradient'>
			<SmallLogo/>
			<Navbar_white/>
			<div className='flex-container-miejsca'>
			<Carousel data={sognsvann}>
				<h2>Jezioro Sognsvann</h2>
				<p> Popularne miejsce do spacerów, biegania i pikników. Dojazd linią metra nr 5 do stacji Sognsvann.</p>
			</Carousel>
			<Carousel data={nordmarka}>
				<h2>Frogner Park</h2>
				<p>Znany z rzeźb Gustava Vigelanda, idealny na spacery i relaks. Dojazd tramwajem linii 12 do przystanku Vigelandsparken.</p>
			</Carousel>
			<Carousel data={forgner_park}>
				<h2>Bygdøy</h2>
				<p className='carusel_par' > Półwysep z muzeami i plażami. Dojazd autobusem linii 30 do przystanku Bygdøynes.</p>
			</Carousel>
			<Carousel data={ekebergparken}>
				<h2>Holmenkollen</h2>
				<p>Skocznia narciarska z muzeum narciarstwa i panoramicznym widokiem na Oslo. Dojazd linią metra nr 1 do stacji Holmenkollen.</p>
			</Carousel>
			<Carousel data={bygdoy}>
				<h2>Nordmarka</h2>
				<p>Rozległy obszar leśny idealny do pieszych wędrówek, jazdy na rowerze i narciarstwa biegowego. Dojazd linią metra nr 1 do stacji Frognerseteren.</p>
			</Carousel>
			<Carousel data={wyspy_oslo}>
				<h2>Ekebergparken</h2>
				<p>Park rzeźb z widokiem na miasto. Dojazd tramwajem linii 18 lub 19 do przystanku Ekebergparken.</p>
			</Carousel>
			<Carousel data={holmenkollen}>
				<h2>Wyspy Oslofjordu</h2>
				<p>Miejsca do kąpieli i pikników. Promy linii 91–94 z Rådhusbrygge obsługiwane przez Oslo-Fergene.</p>
			</Carousel>
			<Carousel data={tryvann_vinterpark}>
				<div></div>
				<h2>Tryvann Vinterpark</h2>
				<p>Ośrodek narciarski z trasami zjazdowymi. Dojazd linią metra nr 1 do stacji Voksenkollen, a następnie autobusem wahadłowym.</p>
			</Carousel>
				</div>
				<div className='flex-container-paragraph'>
					<p></p>
			<Footer />
					 </div>
			{/* <div className='linear-gradient'/> */}
		</div>
	);
};

export default Miejsca_warte_uwagi;
