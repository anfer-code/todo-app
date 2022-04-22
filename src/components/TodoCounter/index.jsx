import { useTodoContext } from '../../context/TodoContext'
import './style.css'

export default function TodoCounter () {
  const { completedTodos, totalTodos: total } = useTodoContext()

  return (
    <>
      <h2 className='Todo-Counter'>Completado {completedTodos} de {total} TODOs</h2>
    </>
  )
};
