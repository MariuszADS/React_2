import Footer from './Footer';
import '../App.css';
import Navbar_white from './Navbar_white';
import {useTranslation} from "react-i18next"

export default function TipsContentTramwaj() {
	
	const {t} = useTranslation()

	return (
		<div className='positionD'>
			<Navbar_white />
			<h1 className="mainH">{t("tramwaj_trikk")}</h1>
			<h3 className="importantH">
			{t("look_at_trikk")}
			</h3>
			<section>
				<ul  className="listS">
					<li className='tipsContentFirst'>{t("tip_5")}</li>
					<br/>
					<li className='tipsContentFirst'>{t("tip_6")}</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
				{t("tram_distribution")}
				</h3>
				    <img src='/public/mapy/image 18.jpg' className='mapa_lini_tramwajow'/>

            </section>
			
			<div className='specialD'>
			<h3 className='headindSpecialD'>{t("emergency")}</h3>
			<br/>
			<p className='paragraphSpecialD'>{t("emergency_facility")}</p>
			</div>

			<h2 className='headindSpecialDsecond'>{t("fine_info")}</h2>
			<Footer/>
		</div>
	);
}
