import BarraLateral from '../../Containers/BarraLateral'
import ListaDeTarefas from '../../Containers/ListaDeTarefas'
import BotaoAdicionar from '../../components/botaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
