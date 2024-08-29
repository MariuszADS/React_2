
import BackGround from './BackGround/BackGround' 
import './App.css';


function Button_nav({ children }) {
	return <button>{children}</button>;
}


function App() {
	return (
		<div>
			<BackGround />

			<section id='nav'>
				<li id='list'>
					<Button_nav>Miejsca wartę uwagi</Button_nav>
					<Button_nav>Wskazówki i porady</Button_nav>
					<Button_nav>Ruter #</Button_nav>
					<Button_nav>Kontakt</Button_nav>
					<Button_nav>English or </Button_nav>
				</li>
			</section>
		</div>
	);
}

export default App;
