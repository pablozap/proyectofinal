import './App.css';
import { Productos } from './modules/productos';

function App() {
  return (
    <div className="App">
      <div className='productos-contenedor'>
        <h1>Mis Productos</h1>
        <Productos className="productos-propiedades"/>
      </div>
      
    </div>
  );
}

export default App;