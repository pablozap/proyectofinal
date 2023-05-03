import './App.css';
import { Productos, actuales } from './modules/Productos';
import { Ventas } from './modules/Ventas';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavBar } from "./Components/NavBar";
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