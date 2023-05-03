import { useState } from "react";
import './Ventas.css';
import {actuales} from './Productos';
import Select from "react-select";
export const Ventas = () => {
    const [cantidad, setCantidad] = useState(null);

    const Venta = () => {
        let posicion = actuales.indexof(Select.target.value);
        actuales[posicion].quantity -= cantidad;
        console.log(actuales[posicion].quantity);
    }

    return (           
        <div className="Ventas-contenedor">
            <h1>Ventas</h1>
            <Select
                options={actuales.map(objeto => ({value: objeto, label: objeto.name}))}
            />
            <input type="number" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} />
            <button onClick={(e) => Venta()}>Guardar</button>
        </div>
    )
}
