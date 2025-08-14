import AddTodo from "./assets/components/AddTodo";
import TodoList from "./assets/components/TodoList";
import { useTodos } from "./assets/hooks/useTodos";

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, error } = useTodos();

  return (
    <div className="app-container">
      <h1>🌟 My Todo List</h1>
      <AddTodo onAdd={addTodo} error={error} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
