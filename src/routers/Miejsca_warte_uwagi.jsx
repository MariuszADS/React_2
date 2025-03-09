import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import Miejsca_context from '../Components/Miejsca_context';
// import {sognsvann} from "../assets/img/miejsca_content_img/Sognsvann/Hiking in Oslo_ The Best Trails Around Norway's Capital.jpg";



const Miejsca_warte_uwagi = () => {
	return (
		<div className='linear-gradient'>
			<SmallLogo/>
			<Navbar_white/>
			<div className='flex-container-miejsca'>
			<Miejsca_context
			images={[
				"../assets/img/miejsca_content_img/Sognsvann/Hiking in Oslo_ The Best Trails Around Norway's Capital.jpg",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text="Popularne miejsce do spacerów, biegania i pikników. Dojazd linią metra nr 5 do stacji Sognsvann."
			header='Jezioro Sognsvann'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text="Znany z rzeźb Gustava Vigelanda, idealny na spacery i relaks. Dojazd tramwajem linii 12 do przystanku Vigelandsparken."
			header='Frogner Park'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text=" Półwysep z muzeami i plażami. Dojazd autobusem linii 30 do przystanku Bygdøynes."
			header='Bygdøy'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text="Skocznia narciarska z muzeum narciarstwa i panoramicznym widokiem na Oslo. Dojazd linią metra nr 1 do stacji Holmenkollen."
			header='Holmenkollen'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text="Rozległy obszar leśny idealny do pieszych wędrówek, jazdy na rowerze i narciarstwa biegowego. Dojazd linią metra nr 1 do stacji Frognerseteren."
			header='Nordmarka'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text="Park rzeźb z widokiem na miasto. Dojazd tramwajem linii 18 lub 19 do przystanku Ekebergparken."
			header='Ekebergparken'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text=" Miejsca do kąpieli i pikników. Promy linii 91–94 z Rådhusbrygge obsługiwane przez Oslo-Fergene."
			header='Wyspy Oslofjordu'
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
			<Miejsca_context
			images={[
				"../assets/img/",
				"../assets/img/",
				"../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			header='Tryvann Vinterpark'
			text="Ośrodek narciarski z trasami zjazdowymi. Dojazd linią metra nr 1 do stacji Voksenkollen, a następnie autobusem wahadłowym."
			interval={3000} // Czas w milisekundach (opcjonalnie)
			/>
				</div>
				<div className='flex-container-paragraph'>
					<p>Culpa consequat cillum in aliqua aute exercitation velit. Lorem ullamco eu aliquip Lorem consectetur do consectetur ea non deserunt fugiat.</p> </div>
			{/* <div className='linear-gradient-2'/> */}
			<Footer />
		</div>
	);
};

export default Miejsca_warte_uwagi;
