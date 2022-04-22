import { createContext, useContext, useState } from 'react'
import { useLocalStoragePlatzi } from '../hooks/useLocalStoragePlatzi'

const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStoragePlatzi('TODOS_V1', [])
  const [show, setShow] = useState(false)

  const [filter, setFilter] = useState('')
  const filterTodos = () => {
    return todos.filter(el => el.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) || todos
  }

  const completedTodos = todos.filter(({ completed }) => !!completed).length || 0
  const totalTodos = todos.length

  const completeTodos = (text) => {
    const newList = todos.map(el => {
      if (!(el.text === text)) {
        return el
      }
      el.completed = !el.completed
      return el
    })
    saveTodos(newList)
  }

  const deleteTodo = (text) => {
    const newList = todos.filter(el => el.text !== text)
    saveTodos(newList)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos)
  }

  const value = {
    todos,
    loading,
    error,
    deleteTodo,
    completeTodos,
    filter,
    setFilter,
    filterTodos,
    completedTodos,
    totalTodos,
    show,
    setShow,
    addTodo
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoContextProvider')
  }
  return context
}

export { TodoContextProvider, useTodoContext }
