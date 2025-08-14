import { useState } from "react";

interface AddTodoProps {
  onAdd: (text: string) => void;
  error?: string | null;
}

export default function AddTodo({ onAdd, error }: AddTodoProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="✍️ Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        ➕ Add
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
