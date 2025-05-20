import '../App.css'
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import DownloadButton from './DownloadButton';

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
					<li className='tipsContentFirst'>Pobrać	odpowiedna wersje aplikacji ponieważ inaczej nie kupimy biletu oraz nie sprawdzimy trasy żadnego transportu publiczengo  albo kupić 	kartę w punkcie ‘Ruter’ I ją doładowywać a następnie odbijać w danym numerze lini metra  </li>
					<br/>
					<li className='tipsContentFirst'>
					Jeśli 	chodzi o stacje w centrum Oslo(Nationaltheatret,Jernbanetorget,Stortinget) pierwsze dwa 	przystanki dysponują dostępem do metra,pociągów,autobusów.
					</li>
					<br/>
					<li className='tipsContentFirst'>
					Wszystkie metra poruszają się w strefie pierwszej, z wyjątkiem merta nr 3 lecz bilet na metro nr 3 jest taki sam jak na inne metra.
					</li>
					<br/>
					<li className='tipsContentFirst'>Legitimacje studenckie(polskie) są honorowane przez aplikacje “Ruter”</li>
					<br/>
					<li className='tipsContentFirst'>w Oslo kursują zawsze dwa metra tej samej lini nr 5 ale jeżdżą w dwóch kierunkach. Mają one kierunek “Songsvann” oraz “Ringen via Tøyen”</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini metra w obrębie Oslo
				</h3>
				    <img src='/src/assets/img/mapa_lini_metra.png' className='mapa_lini'/>
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
			<p className='paragraphSpecialD'>W sytuacjach wyjątkowych takich jak ciągłe opóźnianie metra lub 	wstrzymanie ruchu na stacji jest zalecane śledzenie aplikacji 	“Ruter” oraz słuchanie komunikatów ze stacji. <br/>Kiedy ta 	sytuacja wpływa na nas w dotkliwy sposób np.Uniemożliwiony powrót do domu przez daną sytuacje I nie mamy możliwości innej 	jak ta , warto rozważyć zamówienieparagraphSpecialD taksówki za którą  “Ruter będzię zobligowany zapłacić za nią, po wysłaniu paragonu oraz opisaniu sytuacji”.</p>
			</div>

			<h2 className='headindSpecialDsecond'><strong>Mandat za nie posiadanie biletu wynosi 1237kr na miejscu, gdy opłata zostanie uiszczona jest w poźniejszym terminie wynosi 1437kr.</strong></h2>
			<Footer/>
		</div>
	);
}
