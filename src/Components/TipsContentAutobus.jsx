import '../App.css';
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import bus from '/mapy/mapa_autobus.jpg'
export default function TipsContentAutobus() {
	return (
		<div className='positionD'>
			<Navbar_white />
			<h1 className="mainH">Autobus albo bus</h1>
			<h3 className="importantH">
			Na co należy zwrócić uwagę przy podróżowaniu autobusm z aplikacja Ruter # :
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>Warto zwrócić uwagę, czy stoimy na odpowiednim przystanku, ponieważ w Oslo przystanki autobusowe często są ustawione w jednym rzędzie lub rozmieszczone w różnych kierunkach. Oznaczone są literami (A, B, C, D, E, F), co może wprowadzać w błąd może się wydawać, że stoimy we właściwym miejscu, a autobus tymczasem przejedzie obok.
					Wyjątkiem są wszystkie „bussterminale”, ponieważ tam autobusy muszą zatrzymać się na wyznaczonym stanowisku, np. „A”.</li>
					<br/>
					<li className='tipsContentFirst'>W Norwegii przyjęte jest, że jeśli pasażer nie wychyli się lub nie pomacha kierowcy, ten może nie zatrzymać się na przystanku nie ma bowiem takiego obowiązku.</li>
					<br/>
					<li className='tipsContentFirst'>Kierowcy autobusów w Oslo kommune oraz Bærum kommune często jeżdżą nieostrożnie, przez co łatwo się przewrócić. Dlatego zaleca się wstawać dopiero wtedy, gdy autobus się zatrzyma.</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini autobusów w obrębie Oslo
				</h3>
				    <img src={bus} className='mapa_autobusow'/>

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
