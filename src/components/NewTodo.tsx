import React, { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-store";

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const textRef = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textRef.current!.value;

        if(enteredText.trim() === '') {
            return;
        }

        todosCtx.onAddTodos(enteredText);
    };

    return (
        <form className={classes.form} onSubmit={addTodoHandler}>
            <label htmlFor="text">Todo text :</label>
            <input type="text" id="text" ref={ textRef }/>
            <button type="submit">Submit Todo</button>
        </form>
    );
};
export default NewTodo;