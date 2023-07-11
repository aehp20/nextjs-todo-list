"use client"

import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useEffect } from "react"

import { useTodoContext } from '../context/context';
import { TodoContextType, TodoForm, Todo } from '../interfaces';

type Inputs = {
  title: string
  description: string
}

export default function EditPage () {
  const router = useRouter();
  const searchParams = useSearchParams()
  const { todos } = useTodoContext() as TodoContextType;

  const id = searchParams.get('id') as string

  console.log('id', id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  const { update }= useTodoContext() as TodoContextType;

  const onSubmit: SubmitHandler<Inputs> = (data: TodoForm) => {
    console.log(data);
    const ediTodo: Todo = {id, ...data}
    update(ediTodo)
    router.push("/")
  }

  useEffect(() => {
    const foundTodo = todos.find(item=>item.id===id)
    if (foundTodo) {
      reset({
        title: foundTodo.title,
        description: foundTodo.description
      });
    }
  }, [reset, id, todos]);

  return <div>
    <div>Edit Todo</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title *</label>
        <input defaultValue="" {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
      </div>
      <div>
        <label>Description</label>
        <input defaultValue="" {...register("description")} />
      </div>
      <button type="submit">Edit</button>
    </form>
    <div>
      <Link href="/">Go home</Link>
    </div>
  </div>
}
