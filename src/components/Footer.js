import logo from '../assets/footer_logo.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{backgroundColor: "black"}}>
        <img src={logo} 
        alt="Kasa logo" 
        className='footer-logo'/>
        <h2 style={{color: "white"}}
        className='footer-text'>© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}

export default Footer;