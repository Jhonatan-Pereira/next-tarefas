import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SelecaoProps {
  valor: boolean
}

export default function Selecao(props: SelecaoProps) {

  const gradient = props.valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

  return (
    <div className={`
      flex justify-center items-center
      h-7 w-7 text-white
      rounded-full border border-gray-400
      cursor-pointer ${gradient}
    `}>
      {props.valor ? <FontAwesomeIcon size="sm" icon={faCheck} /> : ''}
    </div>
  )
}