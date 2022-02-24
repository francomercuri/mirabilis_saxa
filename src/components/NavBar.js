

import './NavBar.css';
import Logo from './logo_C.png';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';


export default function NavBar (){

    return (
        <header className="navBar">
        <Link className="logo" to={'/'}>
            <img src={Logo} alt="Logo Mirabilis Saxa" />
        </Link>
        <p className="marca">Mirabilis Saxa</p>
        <nav className="botoneraHeader">
            <ul>
                <li> <NavLink to={'/'}>Productos</NavLink></li>
                <li> <NavLink to={'/category/piedras'}> piedras </NavLink> </li>
                <li> <NavLink to={'/category/decoracion'}> Decoracion </NavLink> </li>
                <li> <NavLink to={'/cart'}><CartWidget quantity={0}/></NavLink></li>
            </ul>
           
        </nav>
    </header>
    )
}