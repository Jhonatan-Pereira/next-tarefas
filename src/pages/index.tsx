import Tarefa from "../model/Tarefa";
import tarefasIniciais from '../data/mock';
import Selecao from '../components/lista/Selecao';
import ListaItem from '../components/lista/ListaItem';
import Lista from '../components/lista/Lista';
import { useState } from "react";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";

export default function Home() {

  const [tarefas, setTarefas] = useState(tarefasIniciais)

  return (
    <div className={`
      flex flex-col
      bg-gray-300
      h-screen
    `}>
      <Cabecalho>
        <h1>Teste</h1>
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={(novasTarefas) => {
          setTarefas(novasTarefas)
        }}/>
      </Conteudo>
    </div>
  )
}
