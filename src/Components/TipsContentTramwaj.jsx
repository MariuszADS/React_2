import '/src/App.css'

export default function TipsContentTramwaj() {
	return (
		<div className='positionD'>
			<h1 className="mainH">Tramwaj albo Trikk</h1>
			<h3 className="importantH">
			Na co należy zwrócić uwagę przy podróżowaniu tramwajem z aplikacja Ruter # :
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>Tramwaje w Oslo mają tendencje do częstego spóźniania się 	i jeśli mamy z nich kożystać lepiej mięć zapas czasu gdy są środkiem lokomocji pośredniczącym.</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				Rozkład lini tramwajów w obrębie Oslo
				</h3>
				    <img src='/src/assets/img/image 18.jpg' className='mapa_lini_tramwajow'/>

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
