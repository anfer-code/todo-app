import { useState } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import './index.css'

export default function TodoForm () {
  const [text, setText] = useState('')

  const {
    addTodo,
    setShow
  } = useTodoContext()

  const onChange = ev => setText(ev.target.value)
  const onCancel = () => setShow(prev => !prev)
  const onSubmit = ev => {
    ev.preventDefault()
    addTodo(text)
    setShow(prev => !prev)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={text}
        onChange={onChange}
        placeholder='Escribe una nueva tarea'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button-cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className='TodoForm-button TodoForm-button-add'
          type='submit'
        >
          Añadir
        </button>
      </div>
    </form>
  )
};
