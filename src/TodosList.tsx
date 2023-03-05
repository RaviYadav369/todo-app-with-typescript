import React from "react";
import { Todo } from "./TodosProvider";
import { useDispatch, useTodos } from "./TodosProvider";

const TodosList = () => {
    const todos = useTodos();
    return (
        <ul className="todo-list">
            {todos?.map((todo) => (
                <li key={todo.id}>
                    <TodoElement todo={todo} />
                </li>
            ))}
        </ul>
    );
};

function TodoElement({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();
    return (
        <>
            <input
                type="checkbox"
                name={`${todo.id}-${todo.text}`}
                id={`${todo.id}-${todo.text}`}
                checked={todo.done}
                onChange={(e) => {
                    dispatch({
                        type: "change",
                        todo: {
                            ...todo,
                            done: e.target.checked,
                        },
                    });
                }}
            />
            {todo.text}
            <button
                onClick={() => {
                    dispatch({ type: "remove", id: todo.id });
                }}
            >X</button>
        </>
    );
}

export default TodosList;
