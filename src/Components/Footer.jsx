// import '/src/App_1.css'
export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer_container_data'>
				<div className='categories'>
					<div className='categories_column_rules'>
						<ul>
							<li className="li_00"></li>
							<li className="li_00"></li>
						</ul>
					</div>
				</div>
				{/* dodać linki do li */}
				<div className='navigation'>
					<div className='navigation_column'>
						<ul className="navigation_column_list">
						<li><a href="/wskazowki">Wskazówki i porady</a></li>
						<li><a href="/miejsca">Miejsca warte uwagi</a></li>
						<li><a href="/">Oslo&nabo</a></li>
						<li><a href="https://ruter.no/">Ruter</a></li>
						</ul>
					</div>
					</div>


				<div className='resources_spans'>
					{/* dodać linki do github i linkedin */}
					<span className='resources_email'>Email: kacperbak00@gmail.com</span>
					<a className="span_a" href='https://github.com/MariuszADS' target='_blank' rel='noopener noreferrer'>
					<img className='resources_github' href='https://github.com/MariuszADS'/>
					</a>
					<a className="span_a" href='https://www.linkedin.com/in/kacper-bak-0aab37232/' target='_blank' rel='noopener noreferrer'>
					<img className='resources_linkedin' />
					</a>
				</div>
			</div>
		</div>
	);
}
