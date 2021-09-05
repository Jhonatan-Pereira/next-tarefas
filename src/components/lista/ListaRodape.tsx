import ListaTarefas from "../../model/ListaTarefas";
import ListaBotao from "./ListaBotao";

interface ListaRodapeProps {
  tarefas: ListaTarefas;
  mudou: (tarefas: ListaTarefas) => void;
}

export default function ListaRodape(props: ListaRodapeProps) {

  const { tarefas, mudou } = props
  
  function renderizarQtdeItems() {
    return (
      <>
        <span className="text-gray-300 hidden lg:inline">
          {tarefas.quantidade}
          {tarefas.quantidade === 0 
            ? ' Nenhuma tafefa encontrada' 
            : tarefas.quantidade === 1 
              ? ' Tarefa encontrada' 
              : ' Tarefas encontradas'}
        </span>
        <span className="flex-1 hidden lg:inline"></span>
      </>
    )
  }

  function renderizarBotoesFiltro() {
    return (
      <>
        <ListaBotao
          className="hideen md:inline"
          onClick={() => mudou(tarefas.removerFiltro())}
          selecionado={tarefas.exibindoTodas()}>
          Todas
        </ListaBotao>
        <ListaBotao
          className="mx-4"
          onClick={() => mudou(tarefas.removerFiltro())}
          selecionado={tarefas.exibindoSomenteAtivas()}>
          Ativas
        </ListaBotao>
        <ListaBotao
          onClick={() => mudou(tarefas.removerFiltro())}
          selecionado={tarefas.exibindoSomenteConcluidas()}>
          Concluídas
        </ListaBotao>
      </>
    )
  }

  function renderizarExcluirConcluidas() {
    return (
      <>
        <span className="flex-grow"></span>
        <ListaBotao 
          onClick={() => mudou(tarefas.excluirConcluidas())}>
          Excluir <span className="hidden md:inline">Concluídas</span>
        </ListaBotao>
      </>
    )
  }
  
  return (
    <li className="flex p-5">
      {renderizarQtdeItems()}
      {renderizarBotoesFiltro()}
      {renderizarExcluirConcluidas()}
    </li>
  )
}