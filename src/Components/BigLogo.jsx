import { useTranslation } from "react-i18next";

const BigLogo = () => {

	const {t} =useTranslation()
	return (
		<div className='BigLogo'>
			<div className="main_logo">
			<span className='logo_part_oslo'>Oslo</span>
			<span className='logo_part_ampersand'>&</span>
			<span className='logo_part_nabo'>nabo</span>
			</div>
			<p className='bgc_logo_par'>
			{t("goal")}
			</p>
		</div>
	);
};

export default BigLogo