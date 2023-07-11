"use client"

import Link from 'next/link';

import { useTodoContext } from "../context/context"
import type { TodoContextType } from "../interfaces"

const List = () => {
  const { todos } = useTodoContext() as TodoContextType;

  return todos.map(todo=>(<div key={todo.id}>
    <Link href={{ pathname: 'edit', query: { id: todo.id } }}>
  {todo.title}
</Link>
  </div>));
}

export default List;
