import {Route, Routes} from 'react-router-dom'
import Home from './paginas/Home'
import Cadastro from './paginas/Cadastro'
import Projetos from './paginas/Projetos'
import './Style/style.css'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/projetos" element={<Projetos />} /> 
      </Routes>
    </>
  )
}

export default App
