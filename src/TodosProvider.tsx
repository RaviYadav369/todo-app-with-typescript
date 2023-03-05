import React, { createContext, useContext, useReducer } from "react";
import  { Action } from "./todosReducer";
import todosReducer from "./todosReducer";

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

const initialTodos: Todo[] = [
    {
        id: 1,
        text: "Learn Typescript",
        done: false,
    },
    {
        id: 2,
        text: "Learn Basics of Typescript",
        done: true,
    },
    {
        id: 3,
        text: "Build Ecommerce website",
        done: true,
    },
    {
        id: 4,
        text: "Use typescript with react",
        done: true,
    },
];

const TodoContext = createContext<typeof initialTodos | null>(null);
const TodosDispatchCountext = createContext<React.Dispatch<Action>>(() => null);

export function TodosProvider({
    children,
}: {
    children: React.ReactElement[];
}) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    return (
        <TodoContext.Provider value= { todos } >
          <TodosDispatchCountext.Provider value={ dispatch }>
            { children }
            </TodosDispatchCountext.Provider>
        </TodoContext.Provider>
  )
}

export const useTodos = () => useContext(TodoContext);
export const useDispatch = () => useContext(TodosDispatchCountext);
