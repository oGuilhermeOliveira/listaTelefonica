import BarraLateral from './Containers/BarraLateral'
import ListaDeTarefas from './Containers/BarraLateral/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </div>
  )
}

export default App
