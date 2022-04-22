// import { useState } from 'react'
import './style.css'
import IconCheck from '../IconCheck'
import IconDelete from '../IconDelete'

export default function TodoItem ({ text, completed, completeTodos, deleteTodo }) {
  return (
    <li className='Todo-Item'>
      <IconCheck
        completed={completed}
        handlerClick={completeTodos}
      />
      <p className={`Todo-text ${completed && 'Todo-active'}`}>{text}</p>
      <IconDelete
        handlerClick={deleteTodo}
      />
    </li>
  )
};
