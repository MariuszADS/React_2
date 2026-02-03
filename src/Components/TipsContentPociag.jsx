import '../App.css'
import Navbar_white from './Navbar_white';
import Footer from './Footer';
import DownloadButton from './DownloadButton';
import {useTranslation} from "react-i18next"

export default function TipsContentPociag() {

	const {t} = useTranslation()

	return (
		<div className='positionD'>
			<Navbar_white />
			<h1 className='mainH'>{t("pociag_tog")}</h1>
			<h3 className='importantH'>{t("look_at_train")}
			</h3>
			<section>
				<ul className='listS'>
					<li className='tipsContentFirst'>
						{t("look_at_tog_wogn_0")}
					</li>
					<br/>
					<li className='tipsContentFirst'>
						{t("look_at_tog_wogn_1")}
					</li>
					<br/>	
					<h3 className='importantH'>{t("exception")}</h3>
								
					<li className='tipsContentFirst'>
						{t("tip_8")}
					</li>
					<br/>
					<li className='tipsContentFirst'>
						{t("tip_9")}
					</li>
				</ul>
			</section>
			<section className='downloadS'>
				<h3 className='headindDownloadS'>
					{t("schedule_tog")}
				</h3>
				<img src='/public/mapy/mapa_pociagow.jpg' className='mapa_pociagi' />
				
				<h3 className='importantH'>
						{t("details_tog")}
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

			<h2 className='headindSpecialDsecond'>
				<strong>
					{t("fine_info")}
				</strong>
			</h2>
			<Footer />
		</div>
	);
}
