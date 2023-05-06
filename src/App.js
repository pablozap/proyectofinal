import './App.css';
import { NavBar } from "./Components/NavBar/NavBar";
import { Productos} from './Components/Productos/Productos';
import { Ventas } from './Components/Ventas/Ventas';
import { Ganancias } from './Components/Ganancias/Ganancias';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='cuerpo-contenedor'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/Productos' element={<Productos/>} />
            <Route path='/Ventas' element={<Ventas/>} />
            <Route path='/Ganancias' element={<Ganancias/>} />
          </Routes>
        </Router>
      </div>      
    </div>
  );
}

export default App;