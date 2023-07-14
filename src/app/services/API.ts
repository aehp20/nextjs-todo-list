import prisma from '../../../lib/prisma'

export const getTodos = async () => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  })

  return {
    todos,
  }
}
