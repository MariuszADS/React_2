export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer_container_data'>
				<div className='categories'>
					
					<div className='categories_column_rules'>
						<ul>
							<li>O mnie</li>
							<li>Regulamin</li>
						</ul>
					</div>
				</div>
                {/* dodać linki do li */}
				<div className='navigation'>
					
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
                    {/* dodać linki do github i linkedin */}
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
