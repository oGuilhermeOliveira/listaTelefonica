import { useSelector } from 'react-redux'

import Tarefa from '../../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>2 Tarefas macadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
