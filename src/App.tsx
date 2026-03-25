import './App.css'
import './Style/style.css'
import Cabecalho from './componentes/Cabecalho'
import Home from './paginas/Home'
import Projetos from './paginas/Projetos'
import Cadastro from './paginas/Cadastro'
import DetalhesProjeto from './componentes/DetalhesProjeto'
import Cards from './componentes/Cards'
import BarraDeBusca from './componentes/BarraDeBusca'
import Filtro from './componentes/Filtro'
import Rodape from './componentes/Rodape'

function App() {

  return (
    <div>
      <Cabecalho />
      <Home />
      <Projetos />
      <Cadastro />   
      <DetalhesProjeto />
      <Cards />
      <BarraDeBusca />
      <Filtro />
      <Rodape />

    </div>
  )
}

export default App
