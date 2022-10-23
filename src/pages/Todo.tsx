import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";
import { useTodoList } from "../context/TodoListContext";

export default function Todo() {
  const { todoList } = useTodoList()

  return(
      <section className="max-w-3xl px-2 md:px-0 mx-auto">
        <h1 className="text-5xl my-2 text-green-500 font-semibold text-center">
          TODO
        </h1>
        <div className="mt-6">
          <TodoForm />
          <div className="mt-4 flex flex-col-reverse">
          {
            todoList.map(todo => (
              <TodoCard key={todo.id} {...todo} />
            ))
          }
          </div>
        </div>
      </section>
  )
}