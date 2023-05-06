import './Ganancias.css';
import { ganancia } from "../Ventas/Ventas";
export const Ganancias = (props) => {
    return(
        <div>
            <h1>Ganancias</h1>
            <p>Las ganancias hasta el momento son de: {ganancia}</p>
            {console.log(ganancia)}
        </div>
    )
}