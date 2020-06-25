import React from 'react'
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <ul className="list-none">
      {
        todos.map(todo => {
          return <Todo key={ todo.id } toggleTodo={toggleTodo} todo={ todo  } />
        })
      }
    </ul>
  )
}
