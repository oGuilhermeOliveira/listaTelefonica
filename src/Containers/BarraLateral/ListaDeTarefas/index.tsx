import Tarefa from '../../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import * as enums from '../../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypesScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PEDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PEDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas macadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default ListaDeTarefas
