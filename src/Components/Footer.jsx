import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";
// import { useState } from "react";



export default function Footer() {
	const { t } = useTranslation();

	return (
		<div className='footer'>
			<div className='footer_container_data'>
				<div className='navigation'>
					<div className='navigation_column'>
						<ul className="navigation_column_list">
							<li><a href="/wskazowki">{t("wskazowki")}</a></li>
							<li><a href="/miejsca">{t("miejsca")}</a></li>
							<li><a href="/">Oslo&nabo</a></li>
							<li><a href="https://ruter.no/">Ruter</a></li>
						</ul>
					</div>
					<div>
						<button onClick={() => i18n.changeLanguage("pl")}>PL</button>
						<button onClick={() => i18n.changeLanguage("en")}>EN</button>
						<button onClick={() => i18n.changeLanguage("no")}>NO</button>
					</div>
				</div>
				<div className='resources_spans'>
					<span className='resources_email'>Email: kacperbak00@gmail.com</span>
					<a className='resources_github' href='https://github.com/MariuszADS' target='_blank' rel='noopener noreferrer' />
					<a className='resources_linkedin' href='https://www.linkedin.com/in/kacper-bak-0aab37232/' target='_blank' rel='noopener noreferrer' />
				</div>
			</div>
		</div>
	);
}
