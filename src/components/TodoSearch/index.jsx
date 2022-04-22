import './style.css'
import { useTodoContext } from '../../context/TodoContext'

export default function TodoSearch () {
  const { filter, setFilter } = useTodoContext()

  const handlerChange = (ev) => {
    setFilter(ev.target.value)
  }

  return (
    <input
      value={filter}
      onChange={handlerChange}
      type='text'
      placeholder='Escribe tu TODO'
    />
  )
};
