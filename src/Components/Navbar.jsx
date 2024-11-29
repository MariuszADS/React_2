import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="Navbar">
        <span><Link to={'/'}>Oslo&nabo</Link></span>
        <span><Link to={'/wskazowki'}>Wskazówki i porady</Link></span>
        <span><Link to={'/miejsca'}>Miejsca warte uwagi</Link></span>
        <span><Link to={'/kontakt'}>Kontakt</Link></span>
        <span><Link to={'/ruter'}>Ruter #</Link></span>
    </div>
  )
}

export default Navbar