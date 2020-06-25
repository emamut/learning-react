import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos)
      setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)

    todo.complete = !todo.complete

    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value

    if(name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })

    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos )
  }

  return (
    <div className="container mx-auto">
      <div className="flex mt-4">
        <div className="w-1/3">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-full md:w-1/3">
          <input className="appearance-none border-2 border-gray-500 rounded w-full" placeholder="Type TODO" type="text" ref={todoNameRef} />

          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4 mt-3 " onClick={handleAddTodo}>Add TODO</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4 mt-3  ml-3" onClick={handleClearTodos}>Clear Completed</button>
          <div className="mt-3 text-lg">
            <span className="bg-yellow-500 px-3 rounded-full">{todos.filter(todo => !todo.complete).length}</span> left to do
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
