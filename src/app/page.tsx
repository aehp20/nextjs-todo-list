import Link from 'next/link'

import List from './components/List'
import { getTodos } from '../app/services/API'
import type { Todo } from './interfaces'

export default async function Home() {
  const { todos } = (await getTodos()) as { todos: Todo[] }
  console.log('todos', todos)

  return (
    <main>
      <div>
        <div>TODO(s)</div>
        <Link href="/add">Add</Link>
      </div>
      <List todos={todos} />
    </main>
  )
}
