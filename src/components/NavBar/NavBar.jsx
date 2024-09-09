import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo_white from "../../assets/logo_white.png";
import logo_green_black from "../../assets/logo_green_black.png";


function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo" src={logo_green_black} alt="Logo ValaSports"/>
        </div>
        <ul className="navbar-links">
            <li className="navbar-item">
                <a href="/home">Home</a>
            </li>
            <li className="navbar-item">
                <a href="/padel">Pádel</a>
            </li>
            <li className="navbar-item">
                <a href="/palas">Palas</a>
            </li>
            <li className="navbar-item">
                <a href="/contacto">Contacto</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
