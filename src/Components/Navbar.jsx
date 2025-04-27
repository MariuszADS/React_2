// import { Link } from "react-router-dom"

// const NavbarFront = () => {
//   return (
//     <div className="nav">
//       <div className='Navbar'>
//         <li id='list'>
//             <span ><Link to={'/'}>Oslo&nabo</Link></span>
//             <span ><Link to={'/wskazowki'}>Wskazówki i porady</Link></span>
//             <span ><Link to={'/miejsca'}>Miejsca warte uwagi</Link></span>
//             <span ><Link to={'https://ruter.no/'}>Ruter #</Link></span>
//             {/* <span><Link to={'/kontakt'}>Kontakt</Link></span> */}
//             {/* ten element jest fajny do wykorzystania jako bład w INZ, ponieważ zmieniłem podstrone na strone ruter tylko w Navbar_white i dlatego wciaz inna podstrona istnieje */}
//           </li>
//       </div>
//     </div>
//   )
// }

// export default NavbarFront




import { Link } from "react-router-dom";
import '../mobile_hamburger.css'; // Import the CSS file for styling

const NavbarFront = () => {
  return (
    <nav className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li><Link to="/">Oslo&nabo</Link></li>
        <li><Link to="/wskazowki">Wskazówki i porady</Link></li>
        <li><Link to="/miejsca">Miejsca warte uwagi</Link></li>
        <li><a href="https://ruter.no/" target="_blank" rel="noopener noreferrer">Ruter #</a></li>
      </ul>
    </nav>
  );
};

export default NavbarFront;





