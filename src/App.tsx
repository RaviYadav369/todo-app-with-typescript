import AddTodo from "./AddTodo";
import "./App.css";
import TodosList from "./TodosList";
import { TodosProvider } from "./TodosProvider";

function App() {
  return (
    <>
      <TodosProvider >
        <h2>Todos</h2>
        <AddTodo />
        <TodosList />
      </TodosProvider>
    </>
  );
}

export default App;
