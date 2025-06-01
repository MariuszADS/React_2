import '../App.css'
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import DownloadButton from './DownloadButton';
import tbane from'/mapy/mapa_lini_metra.png'

export default function TipsContentMetro() {
	return (
		<div className='positionD'>
			<Navbar_white/>
			<h1 className="mainH">Metro albo T-bane</h1>
			<h3 className="importantH">
			Na co należy zwrócić uwagę przy podróżowaniu metrem z aplikacja Ruter # :
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>Pobierz odpowiednią wersję aplikacji, ponieważ inaczej nie kupisz biletu ani nie sprawdzisz trasy żadnego transportu publicznego. Możesz też kupić kartę w punkcie „Ruter” i ją doładowywać, a następnie odbijać w danym numerze linii metra.</li>
					<br/>
					<li className='tipsContentFirst'>
					Jeśli chodzi o stacje w centrum Oslo (Nationaltheatret, Jernbanetorget, Stortinget), pierwsze dwie z nich mają dostęp do metra, pociągów i autobusów.
					</li>
					<br/>
					<li className='tipsContentFirst'>
					Wszystkie linie metra poruszają się w strefie pierwszej, z wyjątkiem linii nr 3, lecz bilet na nią jest taki sam jak na pozostałe.
					</li>
					<br/>
					<li className='tipsContentFirst'>Polskie legitymacje studenckie są honorowane przez aplikację „Ruter”.</li>
					<br/>
					<li className='tipsContentFirst'>W Oslo kursują zawsze dwa metra linii nr 5, jadące w przeciwnych kierunkach. Mają one oznaczenia „Songsvann” oraz „Ringen via Tøyen”.</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini metra w obrębie Oslo
				</h3>
				    <img src={tbane} className='mapa_lini'/>
                        <h3 className='headindDownloadS'>
						Szczegóły odnośnie metra i pociągów do pobrania poniżej:
                        </h3>
                            <ul>
                                <DownloadButton className='liDownloadS'>Metro_Oslo</DownloadButton>
                            </ul>

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
