import React  from "react";
import { useState } from "react";
import './Productos.css';
export let actuales = [];
export const Productos = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [productos, setProductos] = useState([]);
    actuales = productos;
    return (     
        <div className="productos-contenedor">
            <h1>Mis Productos</h1>
            <ul>
                <li>
                <label htmlFor="nombre">Nombre del Producto</label>
                <input type="text" onChange={(e) => setNombre(e.target.value) } id="nombre" required/>
                </li>
                <li>
                <label htmlFor="precio">Precio</label>
                <input type="number" onChange={(e) => setPrecio(e.target.value)} id="precio" required/>
                </li>
                <li>
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" onChange={(e) => (setCantidad(e.target.value))} id="cantidad" required/>
                </li>
            </ul>
            <button onClick={() => {if (cantidad>0 && precio>0 && nombre!="") {
                setProductos([...productos, {nombre, precio, cantidad}])
            } else {
                alert("Ingrese un cantidad valida");
            } } }>Guardar</button>
            <button onClick={() => console.log(actuales)}>Ver productos</button>
            
        </div>
    )
}
