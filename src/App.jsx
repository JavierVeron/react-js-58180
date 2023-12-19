import './App.css'
import Encabezado from './components/Encabezado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';
import Producto from './components/Producto';

function App() {

  return (
    <>
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/item/:id" element={<Producto />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
