# ReactLearningApp
Implemented React Learning

# 📝 React + TypeScript To-Do List (with LocalStorage)

A simple and interactive to-do list app built using:
- **React** (UI framework)
- **TypeScript** (type safety)
- **LocalStorage** (data persistence)
- **Custom Hooks** (logic separation)

**Features:**
- Add tasks (duplicates prevented)
- Mark tasks complete/incomplete
- Delete tasks
- Save tasks after refresh
- Modern UI with hover effects

---

## 📂 Folder Structure
src/
├── main.tsx # App entry point
├── App.tsx # Root component
├── components/ # UI components
│ ├── AddTodo.tsx # Add task form
│ ├── TodoItem.tsx# Single task display
│ └── TodoList.tsx# Task list display
├── hooks/ # Custom hooks
│ └── useTodos.ts # State + LocalStorage logic
├── types/ # Type definitions
│ └── todo.ts # Todo interface
└── styles/
└── globals.css # App styling


---

## ⚙️ How It Works
1. **State & Persistence**  
   - `useTodos` hook manages todos.  
   - Reads from `localStorage` on load.  
   - Saves to `localStorage` when todos change.  

2. **Adding Tasks**  
   - `AddTodo` calls `addTodo` in `useTodos`.  
   - Prevents duplicates (case-insensitive).  

3. **Toggling & Deleting**  
   - `TodoItem` lets you check/uncheck or delete a task.  

---

## 🚀 Run Locally
```bash
npm create vite@latest my-todo-app --template react-ts
cd my-todo-app
# Replace src/ with project files
npm install
npm run dev


🎯 Possible Upgrades

Filters: All / Active / Completed

Edit task names

Dark mode toggle

Animations with Framer Motion