import { Link } from "react-router-dom"

const Navbar_white = () => {
  return (
    <div className='flex-container'>
        <div className="Navbar_white">
        <span><Link to={'/'}>Oslo&nabo</Link></span>
        <span><Link to={'/wskazowki'}>Wskazówki i porady</Link></span>
        <span><Link to={'/miejsca'}>Miejsca warte uwagi</Link></span>
        {/* <span><Link to={'/kontakt'}>Kontakt</Link></span> */}
        <span><Link to={'https://ruter.no/'}>Ruter #</Link></span>
        </div>
      </div>
  )
}

export default Navbar_white