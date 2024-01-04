import './App.css'
import Encabezado from './components/Encabezado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Producto from './components/Producto';
import ItemListContainer from './components/ItemListContainer';
import Buscador from './components/Buscador';

function App() {

  return (
    <>
    <BrowserRouter>
      <Encabezado />
      <Buscador />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<Producto />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
