export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer_container_data'>
				<div className='categories'>
					{/* <span className='categories_span'>Kategorie</span> */}
					<div className='categories_column_rules'>
						<ul>
							<li>O mnie</li>
							<li>Regulamin</li>
						</ul>
					</div>
				</div>

				<div className='navigation'>
					{/* <span className='navigation_span'>Nawigacja</span> */}
					<div className='navigation_column'>
						<ul>
							<li>Wskazówki i porady</li>
							<li>Miejsca wartę uwagi</li>
							<li>Kontakt</li>
							<li>Ruter</li>
						</ul>
					</div>
				</div>

				<div className='resources'>
					<div className='resources_spans'>
						<img className='resources_github' />
						<img className='resources_linkedin' />
						<br />
						<span className='resources_email'>
							Email: kacperbak00@gmail.com
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
