import './Ventas.css';
import { useState } from "react";
import {actuales} from '../Productos/Productos';
import Select from "react-select";
export let ganancia = null;
export const Ventas = () => {
    const [cantidad, setCantidad] = useState(0);
    const [seleccionado, setSeleccionado] = useState({});
    const [actualGanancia, setActualGanancia] = useState(0);
    ganancia = actualGanancia;

    const handleSeleccionado = ({value}) => {
        console.log(value);
        setSeleccionado(value);
    };

    const Venta = (operacion) => {
        let ubicacion = posicion();
        console.log("Posicion del elemento en el arreglo: "+ubicacion);
        console.log("Precio del elemento en el arreglo: "+actuales[ubicacion].precio);
        if ((actuales[ubicacion].cantidad - cantidad) >= 0) {
            if (operacion == "ganancia") {
                setActualGanancia(actualGanancia + (actuales[ubicacion].precio * cantidad));
            } else {
                setActualGanancia(actualGanancia - (actuales[ubicacion].precio * cantidad));
            }
            actuales[ubicacion].cantidad -= cantidad;
            console.log("La actual cantidad es :" + actuales[ubicacion].cantidad);
        } else {
            alert('No hay' +actuales[ubicacion].nombre + 'suficiente en el inventario');
        }
    }

    const posicion = () => {
        for (let i = 0; i < actuales.length; i++) {
            if (actuales[i].nombre == seleccionado.nombre) {
                return i;
            }
        }}

    const ver = () => {
        console.log("Elemento seleccionado: "+ seleccionado.nombre);
        console.log("Actual ganancia: "+ actualGanancia);
        console.log("la ganancia total es:" + ganancia);
    }

    return (           
        <div className="Ventas-contenedor">
            <h1>Ventas</h1>
            <Select
                options={actuales.map(objeto => ({value: objeto, label: objeto.nombre}))}
                onChange={handleSeleccionado}
            />
            <input type="number" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} />
            <div className='ventas-botones-contenedor'>
                <button onClick={() => Venta("ganancia")} id='ganancia-boton'>Venta</button>
                <button onClick={() => Venta()} id='perdida-boton'>Perdida</button>
            </div>
            <button onClick={() => ver()}>Ver</button>
        </div>
    )
}
