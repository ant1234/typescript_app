import TodoText from "../models/todos";
import TodoItem from "./TodoItem";

const Todos: React.FC<{items: TodoText[]}> = (props) => {
    return (
        <ul>
            
            {props.items.map(item => (<TodoItem key={item.id} text={item.text}/>))}
        </ul>
        );
};

export default Todos;