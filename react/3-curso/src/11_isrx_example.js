import { updateTodos, useTodos } from "./11_jsrx_store";

export default function JsRxReducer() {
    const todos = useTodos();

    const handleComplete = (todo) => {
        updateTodos(todo.id, !todo.complete);
    };

    return (
        <div>
            <br /><br /><br />Todos
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </div>
    );
}

export { JsRxReducer };