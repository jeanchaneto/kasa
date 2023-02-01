import "./Header.css";
import  NavBar from "./NavBar";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="container">
            <NavLink to="/">
                <img src={logo} alt="Kasa logo" className="main-logo" />
            </NavLink>
            <NavBar />
        </header>
    )
}


export default Header;