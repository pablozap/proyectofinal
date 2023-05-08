import './Ganancias.css';
import { ganancia } from "../Ventas/Ventas";
export const Ganancias = (props) => {
    if (ganancia>0) {
        return(
            <div className='ganancias-contenedor'>
                <h1>Ganancias</h1>
                <p>Vendiste {ganancia} pesos</p>
            </div>
        )
    } else if (ganancia == 0) {
        return(
            <div>
                <h1>Ganancias</h1>
                <p>Vendiste 0 pesos</p>
            </div>
        )
    } else {
        return(
            <div className='perdidas-contenedor'>
                <h1>Ganancias</h1>
                <p>Perdiste {ganancia * -1} pesos</p>
            </div>
        )
    }
}