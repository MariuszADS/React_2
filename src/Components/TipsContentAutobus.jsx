import '../App.css';
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

export default function TipsContentAutobus() {

	const { t } = useTranslation()

	return (
		<div className='positionD'>
			<Navbar_white />
			<h1 className="mainH">{t("autobus_bus")}</h1>
			<h3 className="importantH">
				{t("look_at_bus")}
			</h3>
			<section>
				<ul className="listS">
					<li className='tipsContentFirst'>{t("tip_10")}</li>
					<br />
					<li className='tipsContentFirst'>{t("tip_11")}</li>
					<br />

					<li className='tipsContentFirst'>{t("tip_12")}</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
					{t("schedule")}
				</h3>
				<img src='/public/mapy/mapa_autobus.jpg' className='mapa_autobusow' />

			</section>

			<div className='specialD'>
				<h3 className='headindSpecialD'>{t("emergency")}</h3>
				<br />
				<p className='paragraphSpecialD'>{t("emergency_facility")}</p>
			</div>

			<h2 className='headindSpecialDsecond'>{t("fine_info")}</h2>
			<Footer />
		</div>
	);
}
