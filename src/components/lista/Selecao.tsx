interface SelecaoProps {
  valor: boolean
}

export default function Selecao(props: SelecaoProps) {

  const gradient = props.valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

  return (
    <div className={`
      flex justify-center items-center
      h-7
      w-7
      rounded-full
      border border-gray-400
      cursor-pointer ${gradient}
    `}>
      {props.valor ? 'X' : ''}
    </div>
  )
}