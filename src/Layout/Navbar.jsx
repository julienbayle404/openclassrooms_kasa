import {Link, NavLink} from "react-router-dom"
import logo from '../Assets/logo.png'
import '../Styles/navbar.css'


function Navbar() {
    const isActiveStyle = { textDecoration: "underline" };

    const menuItems = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "A Propos" },
    ];

    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to} style={({ isActive }) => isActive ? isActiveStyle : undefined }>
                {label}
            </NavLink>
        </li>
    );

    // Affiche le logo et boucle sur les éléments du menu
    return (
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt='Logo du site Kasa' />
            </Link>
            <nav>
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </div>
    );
}

export default Navbar