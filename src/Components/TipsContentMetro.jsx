import '../App.css'
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import DownloadButton from './DownloadButton';
import { useTranslation } from 'react-i18next';

export default function TipsContentMetro() {

	const { t } = useTranslation()

	return (
		<div className='positionD'>
			<Navbar_white />
			<h1 className="mainH">{t("metro_tbane")}</h1>
			<h3 className="importantH">
				{t("look_at_metro")}
			</h3>
			<section>
				<ul className="listS">
					<li className='tipsContentFirst'>{t("tip_0")}  </li>
					<br />
					<li className='tipsContentFirst'>{t("tip_1")}
					</li>
					<br />
					<li className='tipsContentFirst'>{t("tip_2")}
					</li>
					<br />
					<li className='tipsContentFirst'>{t("tip_3")}</li>
					<br />
					<li className='tipsContentFirst'>{t("tip_4")}</li>
				</ul>
			</section>
			<section className="downloadS">
				<h3 className='headindDownloadS'>
					{t("schedule_metro")}
				</h3>
				<img src='/public/mapy/mapa_lini_metra.png' className='mapa_lini' />
				<h3 className='headindDownloadS'>{t("details_metro")}
				</h3>
				<ul>
					<DownloadButton className='liDownloadS'>Metro_Oslo</DownloadButton>
				</ul>

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
