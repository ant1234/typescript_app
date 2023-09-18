import React from "react";
const AddTodoItem = () => {

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addTodoHandler}>
            <label htmlFor="text">Todo text :</label>
            <input type="text" id="text"/>
            <button type="submit">Submit Todo</button>
        </form>
    );
};
export default AddTodoItem;