import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import Miejsca_context from '../Components/Miejsca_context';



const Miejsca_warte_uwagi = () => {
	return (
		<div className='linear-gradient'>
			<SmallLogo/>
			<Navbar_white/>
			<div className='flex-container-miejsca'>

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
			
				</div>
				<div className='flex-container-paragraph'>
					<p>Culpa consequat cillum in aliqua aute exercitation velit. Lorem ullamco eu aliquip Lorem consectetur do consectetur ea non deserunt fugiat.</p> </div>
			{/* <div className='linear-gradient-2'/> */}
			<Footer />
		</div>
	);
};

export default Miejsca_warte_uwagi;
