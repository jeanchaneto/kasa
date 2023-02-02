import "./Navbar.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="navbar-text">Accueil</NavLink>
      <NavLink to="about" className="navbar-text">A Propos</NavLink>
    </nav>
  )
}

export default NavBar;