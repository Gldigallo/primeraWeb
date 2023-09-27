import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './paginas/Inicio'
import Productos from './paginas/Productos'
import Informacion from './paginas/Informacion'
import Comentarios from './paginas/Comentarios'
import Redes from './paginas/Redes'
import Facebook from './paginas/Facebook'
import Instagram from './paginas/Instagram'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/Productos' element={<Productos />}></Route>
          <Route path='/Domentarios' element={<Comentarios />}></Route>
          <Route path='/Iformacion' element={<Informacion />}></Route>
          <Route path='/Redes' element={<Redes />}></Route>
          <Route path='/Facebook' element={<Facebook />}></Route>
          <Route path='/Instagram' element={<Instagram />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
