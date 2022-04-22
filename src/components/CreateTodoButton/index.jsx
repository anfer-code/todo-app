import { useTodoContext } from '../../context/TodoContext'
import './style.css'

export default function CreateTodoButton () {
  const {
    setShow
  } = useTodoContext()
  const handlerClick = () => setShow(prev => !prev)

  return (
    <button className='Create-Button' onClick={handlerClick}>+</button>
  )
};
