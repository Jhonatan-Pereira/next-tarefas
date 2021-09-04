import Tarefa from "../model/Tarefa";
import tarefasIniciais from '../data/mock';
import Selecao from '../components/lista/Selecao';
import ListaItem from '../components/lista/ListaItem';

export default function Home() {

  let tarefas = tarefasIniciais
  tarefas = tarefas.filtrarConcluidas()
  tarefas = tarefas.filtrarAtivas()
  tarefas = tarefas.removerFiltro()

  tarefas = tarefas.adicionarTarefa(Tarefa.criarAtiva(4, 'Lavar Pratos'))
  tarefas = tarefas.adicionarTarefa(Tarefa.criarConcluida(5, 'Cuidar das crianças'))
  tarefas = tarefas.excluirConcluidas()

  tarefas = tarefas.modificarTarefa(tarefas.itens[2].alterarStatus())

  function renderizarTarefas() {
    return tarefas.itens.map(tarefa => {
      return (
        <div key={tarefa.id}>
          <span>{tarefa.id}</span>
          <span>{tarefa.descricao}</span>
          <span>{tarefa.concluida ? 'Concluída' : 'Ativa'}</span>
        </div>
      )
    })
  }

  return (
    <div className={`
      flex flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-tr
      from-gray-600
      to-gray-900
      h-screen
    `}>
      {/* {renderizarTarefas()} */}
      <ul>
        <ListaItem valor="Exemplo de item #1" concluido={false} 
          alterarStatus={() => {}}/>
        <ListaItem valor="Exemplo de item #2" concluido={true} 
          alterarStatus={() => {}}/>
      </ul>
    </div>
  )
}
