import '/src/App.css'

export default function TipsContentAutobus() {
	return (
		<div className='positionD'>
			<h1 className="mainH">Autobus albo bus</h1>
			<h3 className="importantH">
			Na co należy zwrócić uwagę przy podróżowaniu autobusm z aplikacja Ruter # :
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>Warto 	zwrócić uwagę czy stoimy na odpowiednim przystanku ponieważ 	często w Oslo przystanki autobusowe są stawiane w jednym 	rzędzie lub rozmieszczone w różnych 	kierunkach i są oznaczone 	literami(A,B,C,D,E,F) ponieważ może się nam wydawać że stoimi 	na odpowiedim przystanku i autobus obok nas przejedzie.Wyjątkiem jest każdy “bussterminal’’ ponieważ tam autobusy muszą się zatrzymać i wjechać do detykowanego miejsca np “A”</li>

					<li className='tipsContentFirst'>W 	Norwegii jest przyjęte, że jeśli nie wychylimy się lub nie 	pomachamy kierowcy ten się na danym przystanku nie zatrzyma 	ponieważ nie ma takiego wymogu.
</li>
					<li className='tipsContentFirst'>Bardzo 	ważne żeby kierowcy dać znać przyciskiem „STOP” bo 	przejedzie nas przystanek bez zastanowienia.</li>

					<li className='tipsContentFirst'>Kierowcy 	autobusów w Oslo kommune oraz 	Bærum kommune często 	jeżdżą nie ostrożnie i łatwo się można przewrócić, więc 	zalecane wstać kiedy autobus się zatrzyma.</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini autobusów w obrębie Oslo
				</h3>
				    <img src='/src/assets/img/mapa_autobus.jpg' className='mapa_autobusow'/>

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
