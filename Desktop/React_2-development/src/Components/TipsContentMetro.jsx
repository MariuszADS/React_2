import '/src/App.css'

export default function TipsContentMetro() {
	return (
		<div className='positionD'>
			<h1 className="mainH">Metro albo T-bane</h1>
			<h3 className="importantH">
			Na co należy zwrócić uwagę przy podróżowaniu metrem z aplikacja Ruter # :
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>Pobrać 	odpowiedna wersje aplikacji ponieważ inaczej nie kupimy biletu I 	<br/>nie sprawdzimy trasy żadnego transportu publiczengo albo kupić 	kartę w punkcie ‘Ruter’ I ją doładowywać a następnie 	odbijać w danym numerze lini metra</li>
					<li className='tipsContentFirst'>
					Jeśli 	chodzi o stacje w centrum Oslo(Nationaltheatret,Jernbanetorget,Stortinget) pierwsze dwa 	przystanki dysponują dostępem do metra,pociągów,autobusów.
					</li>
					<li className='tipsContentFirst'>
					Wszystkie metra poruszają się w strefie pierwszej
					</li>
					<li className='tipsContentFirst'>Legitimacje	studenckie(polskie) są honorowane przez aplikacje “Ruter”</li>
					<li className='tipsContentFirst'>w Oslo kursują zawsze dwa metra tej samej lini nr 5 ale jeżdżą w dwóch kierunkach. Mają one kierunek “Songsvann” oraz “Ringen via Tøyen”</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini metra w obrębie Oslo
				</h3>
				    <img src='/src/assets/img/mapa_lini_metra.png' className='mapa_lini'/>
                        <h3>
						Szczegóły odnośnie metra do pobrania poniżej:
                        </h3>
                            <ul>
                                <li className='liDownloadS'>Linia1_Metro_Oslo</li>
                                <li className='liDownloadS'>Linia2_Metro_Oslo</li>
                                <li className='liDownloadS'>Linia3_Metro_Oslo</li>
                                <li className='liDownloadS'>Linia4_Metro_Oslo</li>
                                <li className='liDownloadS'>Linia5_Metro_Oslo</li>
                            </ul>

            </section>
			
			<div className='specialD'>
			<h3 className='headindSpecialD'>Sytuacje wyjątkowe:</h3>
			<br/>
			<p className='paragraphSpecialD'>W sytuacjach wyjątkowych takich jak ciągłe opóźnianie metra lub 	wstrzymanie ruchu na stacji jest zalecane śledzenie aplikacji 	“Ruter” oraz słuchanie komunikatów ze stacji. <br/>Kiedy ta 	sytuacja wpływa na nas w dotkliwy sposób np.Uniemożliwiony powrót do domu przez daną sytuacje I nie mamy możliwości innej 	jak ta , warto rozważyć zamówienie taksówki za którą<br/> “Ruter będzię zobligowany zapłacić za nią, po wysłaniu paragonu oraz opisaniu sytuacji”.</p>
			</div>

			<h2 className='headindSpecialDsecond'><strong>Mandat za nie posiadanie biletu wynosi 1237kr na miejscu, gdy opłata zostanie uiszczona jest w poźniejszym terminie wynosi 1437kr.</strong></h2>
		</div>
	);
}
