import Footer from './Footer';
import '../App.css';
import Navbar_white from './Navbar_white';
import trikk from '/mapy/image 18.jpg'

export default function TipsContentTramwaj() {
	return (
		<div className='positionD'>
			<Navbar_white />
			<h1 className="mainH">Tramwaj albo Trikk</h1>
			<h3 className="importantH">
			Na co należy zwrócić uwagę przy podróżowaniu tramwajem z aplikacja Ruter # :
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>Tramwaje w Oslo mają tendencję do częstego spóźniania się, dlatego jeśli planujemy z nich korzystać, lepiej mieć zapas czasu zwłaszcza gdy stanowią środek transportu pośredniczący.</li>
					<br/>
					<li className='tipsContentFirst'>Powtarzającym się problemem są znikające z tablicy odjazdów linie, które jednocześnie znikają z aplikacji Ruter zwykle oznacza to jako kilku­minutowe opóźnienie. </li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini tramwajów w obrębie Oslo
				</h3>
				    <img src={trikk} className='mapa_lini_tramwajow'/>

            </section>
			
			<div className='specialD'>
			<h3 className='headindSpecialD'>Sytuacje wyjątkowe:</h3>
			<br/>
			<p className='paragraphSpecialD'>W sytuacjach wyjątkowych, takich jak ciągłe opóźnienia metra lub wstrzymanie ruchu na stacji, zaleca się śledzenie aplikacji „Ruter” oraz słuchanie komunikatów ze stacji.<br/>
			Jeśli sytuacja wpływa na nas w dotkliwy sposób, np. uniemożliwia powrót do domu i nie mamy żadnej innej alternatywy, warto rozważyć zamówienie taksówki, za którą „Ruter” może być zobligowany zapłacić  po przesłaniu paragonu oraz opisie sytuacji.</p>
			</div>

			<h2 className='headindSpecialDsecond'><strong>Mandat za nie posiadanie biletu wynosi 1237kr na miejscu, gdy opłata zostanie uiszczona jest w poźniejszym terminie wynosi 1437kr.</strong></h2>
			<Footer/>
		</div>
	);
}
