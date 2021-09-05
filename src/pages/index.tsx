import tarefasIniciais from '../data/mock';
import Lista from '../components/lista/Lista';
import { useState } from "react";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import Formulario from "../components/formulario/Formulario";
import Tarefa from '../model/Tarefa';

export default function Home() {

  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }

  return (
    <div className={`
      flex flex-col
      bg-gray-300
      h-screen
    `}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={(novasTarefas) => {
          setTarefas(novasTarefas)
        }}/>
      </Conteudo>
    </div>
  )
}
