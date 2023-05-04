import './Ventas.css';
import { useState } from "react";
import {actuales} from '../Productos/Productos';
import Select from "react-select";
export let actualGanancia = 0;
export const Ventas = () => {
    const [cantidad, setCantidad] = useState(0);
    const [seleccionado, setSeleccionado] = useState({});

    const posicion = () => {
        for (let i = 0; i < actuales.length; i++) {
            if (actuales[i].name == seleccionado.name) {
                return i;
            }
        }}
    
    const Venta = () => {
        let ubicacion = posicion();
        actualGanancia += parseInt(actuales[ubicacion].price) * cantidad;
        actuales[ubicacion].quantity -= cantidad;
    }

    return (           
        <div className="Ventas-contenedor">
            <h1>Ventas</h1>
            <Select
                options={actuales.map(objeto => ({value: objeto, label: objeto.nombre}))}
                onChange={(value) => setSeleccionado(value)}
            />
            <input type="number" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} />
            <button onClick={(e) => Venta()}>Guardar</button>
        </div>
    )
}
