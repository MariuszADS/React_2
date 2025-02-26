import '/src/App.css';

export default function TipsContentPociag() {
	return (
		<div className='positionD'>
			<h1 className='mainH'>Pociąg albo Tog</h1>
			<h3 className='importantH'>
				Na co należy zwrócić uwagę przy podróżowaniu pociągiem z aplikacja Ruter
				# :
			</h3>
			<section>
				<ul className='listS'>
					<li className='tipsContentFirst'>
						
						Wagony mają swoje oznaczenia jako zwykłe, dla niepełnosprawnych,
						rodziców z wózkami,wagony ciszy(quite zone/stille wogn) warto
						zwracać uwagę do jakiego wagonu mamy zamiar wejść.
					</li>
					<li className='tipsContentFirst'>
						Wagony też posiadają dużą naklejke na drzwiach (Valid ticket/Gyldig
						billett) oznacza to ze trzeba mieć konieczenie bilet aktywny inaczej
						czekają nas dodatkowe koszty za jego brak.
					</li>
					{/* <li className='tipsContentFirst'></li> */}
							
							
					<h3 className='importantH'>Wyjątkowo:</h3>
								
					<li className='tipsContentFirst'>
						Kiedy sytuacja wymaga wstrzymania transportu publiczengo jakim są
						pociągi z firm „Ruter” i „Vy” oraz „Flytoget”(pendolino) albo
						„Brakar”, zaraz do godziny jest organiozwany pierwszy najszybczy
						możliwy transport, najczęściej są to autobusy. Przejeżdżają one
						przez te same miasta tak jak autobusy.Niestety „Ruter” nie ma dobrze
						rozwiniętej aplikacji pod względem informowania o nagłych zmianach
						lub wstrzymaniach danego transportu itp.
					</li>
					<li className='tipsContentFirst'>
						Bardzo często aplikacja jest po prostru nie aktualizowania i musimy
						obserwować tablice z odjazdami lub słuchać komunikatów, jeśli
						kupiliśmy w tym czasie bilet na pociąg niestety on przepada.
					</li>
				</ul>
			</section>
			<section className='downloadS'>
				<h3 className='headindDownloadS'>
					Rozkład lini pociągów w obrębie Oslo
				</h3>
				<img src='/src/assets/img/mapa_pociagi.jpg' className='mapa_pociagi' />
				<h3 className='importantH'>
					Udogodnienia w wojewódźtwach siąsadujących z Oslo wraz z strefami udogodnienia dotyczna pierwszych bardziej rozbudowanych stacji
				</h3>
			</section>

			<div className='specialD'>
				<h3 className='headindSpecialD'>Sytuacje wyjątkowe:</h3>
				<br />
				<p className='paragraphSpecialD'>
					W sytuacjach wyjątkowych takich jak ciągłe opóźnianie metra lub
					wstrzymanie ruchu na stacji jest zalecane śledzenie aplikacji “Ruter”
					oraz słuchanie komunikatów ze stacji. <br />
					Kiedy ta sytuacja wpływa na nas w dotkliwy sposób np.Uniemożliwiony
					powrót do domu przez daną sytuacje I nie mamy możliwości innej jak ta
					, warto rozważyć zamówienie taksówki za którą
					<br /> “Ruter będzię zobligowany zapłacić za nią, po wysłaniu paragonu
					oraz opisaniu sytuacji”.
				</p>
			</div>

			<h2 className='headindSpecialDsecond'>
				<strong>
					Mandat za nie posiadanie biletu wynosi 1237kr na miejscu, gdy opłata
					zostanie uiszczona jest w poźniejszym terminie wynosi 1437kr.
				</strong>
			</h2>
		</div>
	);
}
