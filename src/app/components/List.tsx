'use client'

import { useCallback } from 'react'
import Link from 'next/link'

import type { Todo } from '../interfaces'

const List = ({ todos }: { todos: Todo[] }) => {
  const handleRemove = useCallback((id: string) => {}, [])

  return todos.length > 0 ? (
    <div>
      <div>{todos.length} Todo(s)</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link href={{ pathname: 'edit', query: { id: todo.id } }}>
            {todo.title}
          </Link>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  ) : (
    <div>No todo</div>
  )
}

export default List
