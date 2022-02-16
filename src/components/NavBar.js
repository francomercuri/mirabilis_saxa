

import './NavBar.css';
import Logo from './logo_C.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


export default function NavBar (){

    return (
        <header className="navBar">
        <Link className="logo" to={'/'}>
            <img src={Logo} alt="Logo Mirabilis Saxa" />
        </Link>
        <p className="marca">Mirabilis Saxa</p>
        <nav className="botoneraHeader">
            <ul>
                <li> <Link to={'/'}>Productos</Link></li>
                <li> <Link to={'/category/piedras'}> piedras </Link> </li>
                <li> <Link to={'/category/decoracion'}> Decoracion </Link> </li>
                <li> <CartWidget quantity={0}/></li>
            </ul>
           
        </nav>
    </header>
    )
}