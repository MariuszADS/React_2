// import { Link } from "react-router-dom"


// const Navbar_white = () => {
//   return (
//     <div className='flex-container'>
//         <div className="Navbar_white">
//         <span><Link to={'/'}>Oslo&nabo</Link></span>
//         <span><Link to={'/wskazowki'}>Wskazówki i porady</Link></span>
//         <span><Link to={'/miejsca'}>Miejsca warte uwagi</Link></span>
//         <span><Link to={'https://ruter.no/'}>Ruter #</Link></span>
//         {/* <span><Link to={'/kontakt'}>Kontakt</Link></span> */}
//         </div>
//       </div>
//   )
// }

// export default Navbar_white





import { Link } from "react-router-dom";
// import "../styles/NavbarFront.css"; // Upewnij się, że importujesz ten sam plik CSS

const Navbar_white = () => {
  return (
    <nav className="top-nav_white">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li><Link to="/">Oslo&nabo</Link></li>
        <li><Link to="/wskazowki">Wskazówki i porady</Link></li>
        <li><Link to="/miejsca">Miejsca warte uwagi</Link></li>
        <li><a href="https://ruter.no/" target="_blank" rel="noopener noreferrer">Ruter #</a></li>
        {/* <li><Link to="/kontakt">Kontakt</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar_white;



