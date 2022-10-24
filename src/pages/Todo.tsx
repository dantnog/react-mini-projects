import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";
import { useTodoList } from "../context/TodoListContext";
import Container from "../layouts/Container";

export default function Todo() {
  const { todoList } = useTodoList()

  return(
      <Container name="TODO">
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
      </Container>
  )
}