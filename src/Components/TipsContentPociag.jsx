import '../App.css'
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import DownloadButton from './DownloadButton';
import tog from '/mapy/mapa_pociagow.jpg'
export default function TipsContentPociag() {
	return (
		<div className='positionD'>
			<Navbar_white />
			{/* <Navbar_white /> */}
			<h1 className='mainH'>Pociąg albo Tog</h1>
			<h3 className='importantH'>
				Na co należy zwrócić uwagę przy podróżowaniu pociągiem z aplikacja Ruter
				# :
			</h3>
			<section>
				<ul className='listS'>
					<li className='tipsContentFirst'>
						Wagony mają swoje oznaczenia jako zwykłe, dla osób z niepełnosprawnościami, rodziców z wózkami dziecięcymi oraz jako wagony ciszy (quiet zone / stille vogn). Warto zwracać uwagę, do którego wagonu zamierzamy wejść.
					</li>
					<br/>
					<li className='tipsContentFirst'>
						Wagony posiadają również dużą naklejkę na drzwiach (Valid ticket / Gyldig billett), co oznacza, że musimy mieć aktywny bilet  w przeciwnym razie grożą nam dodatkowe opłaty.
					</li>
					<br/>	
					<h3 className='importantH'>Wyjątkowo:</h3>
								
					<li className='tipsContentFirst'>
						Gdy dochodzi do wstrzymania transportu publicznego, np. pociągów obsługiwanych przez firmy Ruter, Vy lub Flytoget (pendolino), zazwyczaj w ciągu godziny organizowany jest najszybszy możliwy transport zastępczy najczęściej w postaci autobusów. Przejeżdżają one przez te same miejscowości, co pociągi.
						Niestety, aplikacja Ruter nie jest dobrze rozwinięta pod względem informowania o nagłych zmianach lub wstrzymaniach poszczególnych środków transportu.
					</li>
					<br/>
					<li className='tipsContentFirst'>
						Bardzo często aplikacja nie jest aktualizowana na bieżąco, dlatego należy obserwować tablice odjazdów na stacji lub słuchać komunikatów. Jeśli w takim momencie kupiliśmy bilet na pociąg, niestety nie podlega on zwrotowi.
					</li>
				</ul>
			</section>
			<section className='downloadS'>
				<h3 className='headindDownloadS'>
					Rozkład lini pociągów w obrębie Oslo
				</h3>
				<img src={tog} className='mapa_pociagi' />
				
				<h3 className='importantH'>
						Szczegóły odnośnie metra i pociągów do pobrania poniżej:
                        </h3>
                            <ul>
                                <DownloadButton className='liDownloadS'>Metro_Oslo</DownloadButton>
                            </ul>
			</section>

			<div className='specialD'>
				<h3 className='headindSpecialD'>Sytuacje wyjątkowe:</h3>
				<br />
				<p className='paragraphSpecialD'>W sytuacjach wyjątkowych, takich jak ciągłe opóźnienia metra lub wstrzymanie ruchu na stacji, zaleca się śledzenie aplikacji „Ruter” oraz słuchanie komunikatów ze stacji.<br/>
				Jeśli sytuacja wpływa na nas w dotkliwy sposób, np. uniemożliwia powrót do domu i nie mamy żadnej innej alternatywy, warto rozważyć zamówienie taksówki, za którą „Ruter” może być zobligowany zapłacić  po przesłaniu paragonu oraz opisie sytuacji.</p>
			</div>

			<h2 className='headindSpecialDsecond'>
				<strong>
					Mandat za nie posiadanie biletu wynosi 1237kr na miejscu, gdy opłata
					zostanie uiszczona jest w poźniejszym terminie wynosi 1437kr.
				</strong>
			</h2>
			<Footer />
		</div>
	);
}
