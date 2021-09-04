import Selecao from './Selecao';

interface ListaItemProps {
  valor: string;
  concluido: boolean;
  alterarStatus: () => void
}

export default function ListItem(props: ListaItemProps) {

  const estiloTexto = props.concluido ? 
    'line-through text-gray-300' : 'text-gray-500'

  return (
    <li onClick={props.alterarStatus} className={`
      flex items-center
      bg-white text-black
      p-5 border-b border-gray-400
      text-xl cursor-pointer
    `}>
      <Selecao valor={props.concluido}/>
      <span className={`
        font-light ml-5
        ${estiloTexto}
      `}>
        {props.valor}
      </span>
    </li>
  )
}