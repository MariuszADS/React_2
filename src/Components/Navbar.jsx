import { Link } from "react-router-dom"

const NavbarFront = () => {
  return (
    <div className="nav">
      <div className='Navbar'>

        <li id='list'>
            <span><Link to={'/'}>Oslo&nabo</Link></span>
            <span><Link to={'/wskazowki'}>Wskazówki i porady</Link></span>
            <span><Link to={'/miejsca'}>Miejsca warte uwagi</Link></span>
            {/* <span><Link to={'/kontakt'}>Kontakt</Link></span> */}
            <span><Link to={'https://ruter.no/'}>Ruter #</Link></span>
            {/* ten element jest fajny do wykorzystania jako bład w INZ, ponieważ zmieniłem podstrone na strone ruter tylko w Navbar_white i dlatego wciaz inna podstrona istnieje */}
          </li>
      </div>
    </div>
  )
}

export default NavbarFront