

import './NavBar.css';
import Logo from './logo_C.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


export default function NavBar (){

    return (
        <header className="navBar">
        <a className="logo" href="#">
            <img src={Logo} alt="Logo Mirabilis Saxa" />
        </a>
        <p className="marca">Mirabilis Saxa</p>
        <nav className="botoneraHeader">
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li> <CartWidget quantity={0}/></li>
            </ul>
           
        </nav>
    </header>
    )
}