import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import React, { useContext } from 'react';
import { TodosContext } from "../store/todos-store";

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => (<TodoItem onRemoveTodo={todosCtx.removeTodos.bind(null, item.id)} key={item.id} text={item.text}/>))}
        </ul>
        );
};

export default Todos;