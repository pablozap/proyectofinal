import './App.css';
import { Productos} from './Components/Productos/Productos';
import { Ventas } from './Components/Ventas/Ventas';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavBar } from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <div className='cuerpo-contenedor'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/Productos' element={<Productos/>} />
            <Route path='/Ventas' element={<Ventas/>} />
          </Routes>
        </Router>
      </div>      
    </div>
  );
}

export default App;