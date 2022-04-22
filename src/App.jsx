import './App.css'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import CreateTodoButton from './components/CreateTodoButton'
import TodoForm from './components/TodoForm'
import { useTodoContext } from './context/TodoContext'
import Modal from './components/Modal'
import { Skeleaton } from './components/Skeleaton'
import TodoEmpty from './components/TodoEmpty'
import TodoError from './components/TodoError'

function App () {
  const {
    todos,
    completeTodos,
    loading,
    error,
    deleteTodo,
    filterTodos,
    show
  } = useTodoContext()

  return (
    <div className='App'>
      <TodoCounter />
      <TodoSearch />
      <div className='App-Results'>
        {error && <TodoError />}
        {loading && <Skeleaton />}
        {((!loading && !todos.length) && <TodoEmpty />) || ((!loading && !filterTodos().length) && <TodoError />)}
      </div>
      {
        (!loading && !!todos.length) && <TodoList todos={filterTodos()} completeTodos={completeTodos} deleteTodo={deleteTodo} />
      }
      <CreateTodoButton />
      {
        show && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </div>
  )
}

export default App
