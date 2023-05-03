import {Link} from 'react-router-dom';
export const NavBar=()=>{
    return(
        <div className='NavBar'>
            <nav>
                <ul>
                    <li><Link to="/Productos">Registar Productos</Link></li>
                    <li><Link to="/Ventas">Registar Ventas</Link></li>
                    <li><Link to="/Ganancias">Mostrar Ganancias</Link></li>
                </ul>
            </nav>
        </div>
    );
}