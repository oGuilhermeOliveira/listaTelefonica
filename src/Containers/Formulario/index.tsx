import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import * as S from '../Formulario/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.YAHOO)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao
        // status: enums.Status.OFFLINE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <S.CampoNum
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          type="number"
          placeholder="Número"
        />
        <Opcoes>
          <p>E-mail</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.YAHOO}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
