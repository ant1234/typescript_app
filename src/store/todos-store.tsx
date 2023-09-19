import React from "react";
import { createContext, Provider, useState } from "react";
import TodoText from "../models/todos";

type TodosContextObj = {
  items: TodoText[];
  onAddTodos: (text: string) => void;
  removeTodos: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    onAddTodos: () => {},
    removeTodos: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {

    const [toDos, setTodos] = useState<TodoText[]>([]);

    const onAddTodoHandler = (text: string) => {
  
      const newTodo = new TodoText(text);
      setTodos(prevTodos => {
        return prevTodos.concat(newTodo);
      });
  
    };
  
    const removeTodoHandler = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== todoId);
      });
    };

    const contextValue: TodosContextObj = {
        items: toDos,
        onAddTodos: onAddTodoHandler,
        removeTodos: removeTodoHandler,
    };

    return (
      <TodosContext.Provider value={contextValue}>
        {props.children}
      </TodosContext.Provider>
    );

};

export default TodosContextProvider;
