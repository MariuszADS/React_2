import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import Miejsca_context from '../Components/Miejsca_context';



const Miejsca_warte_uwagi = () => {
	return (
		<div className='linear-gradient'>
			<SmallLogo/>
			<Navbar_white/>
			<Miejsca_context
			images={[
			  "../assets/img/",
			  "../assets/img/",
			  "../assets/img/",
			]}
			altTexts={["Pierwszy obraz", "Drugi obraz", "Trzeci obraz"]}
			text="To jest przykładowy tekst pod zdjęciami."
			interval={3000} // Czas w milisekundach (opcjonalnie)
		   />
			
			<Footer />
		</div>
	);
};

export default Miejsca_warte_uwagi;
