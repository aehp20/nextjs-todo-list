"use client"

import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';

import { useTodoContext } from '../context/context';
import { TodoContextType, TodoForm } from '../interfaces';

type Inputs = {
  title: string
  description: string
}

export default function AddPage () {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { save }= useTodoContext() as TodoContextType;

  const onSubmit: SubmitHandler<Inputs> = (data: TodoForm) => {
    console.log(data);
    save(data);
    router.push("/");
  }

  return (
    <>
      <div>Add Todo</div>
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
        <button type="submit">Add</button>
      </form>
      <div>
        <Link href="/">Go home</Link>
      </div>
    </>
  );
}
