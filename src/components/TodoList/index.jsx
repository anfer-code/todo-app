import TodoItem from '../TodoItem'
import './style.css'

export default function TodoList ({ todos, completeTodos, deleteTodo }) {
  return (
    <section className='Todo-List'>
      <ul>
        {
          todos.map(el => (
            <TodoItem
              key={el.text}
              text={el.text}
              completed={el.completed}
              completeTodos={() => completeTodos(el.text)}
              deleteTodo={() => deleteTodo(el.text)}
            />
          ))
        }
      </ul>
    </section>
  )
};
