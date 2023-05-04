import {Link} from 'react-router-dom';
import './NavBar.css';
export const NavBar=()=>{
    return(
            <nav className='NavBar'>
                <ul>
                    <li><Link to="/Productos">Registar Productos</Link></li>
                    <li><Link to="/Ventas">Registar Ventas</Link></li>
                    <li><Link to="/Ganancias">Mostrar Ganancias</Link></li>
                </ul>
            </nav>
    );
}