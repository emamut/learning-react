import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <li>
      <label>
        <input type="checkbox" className="leading-tight" checked={todo.complete} onChange={handleTodoClick} />
        <span className="ml-2 text-lg">{ todo.name }</span>
      </label>
    </li>
  )
}
