import React  from "react";
import { useState } from "react";
import './Productos.css';
export const Productos = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [productos, setProductos] = useState([]);
    const agregarProducto = (name, price, quantity) =>{
        let objeto={
            name, price, quantity
        };
        setProductos([...productos, objeto]);
        console.log(productos);
        actuales = productos;
        console.log(actuales);
    }
    return (     
        <div className="productos-contenedor">
            <h1>Mis Productos</h1>
            <ul>
                <li>
                <label htmlFor="nombre">Nombre del Producto</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} id="nombre"/>
                </li>
                <li>
                <label htmlFor="precio">Precio</label>
                <input type="number" onChange={(e) => setPrecio(e.target.value)} id="precio"/>
                </li>
                <li>
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" onChange={(e) => setCantidad(e.target.value)} id="cantidad"/>
                </li>
            </ul>
            <button onClick={() => agregarProducto(nombre, precio, cantidad)}>Guardar</button>
        </div>
    )
}
export let actuales;