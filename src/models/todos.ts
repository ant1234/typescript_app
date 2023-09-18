class TodoText {

    id: string;
    text: string;

    constructor(toDoText: string) {
        this.id = new Date().toISOString();
        this.text = toDoText;
    }
}

export default TodoText;