import { useLayoutEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

let initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
    {
        id: 3,
        title: "Todo 3",
        complete: true,
    },
    {
        id: 4,
        title: "Todo 5",
        complete: false,
    },
];

const todoSubject = new BehaviorSubject(initialTodos)

export function useTodos() {
    const [todos, setTodos] = useState(todoSubject.value)

    // Similar al effect pero se ejecuta antes
    useLayoutEffect(() => {
        todoSubject.subscribe((newState) => {
            setTodos(newState)
        })
    }, [])

    return todos
}

export function updateTodos(token_id, status) {
    let newValues = todoSubject.value.map(value => {
        if (value.id === token_id) {
            value.complete = status
        }
        return value
    })


    todoSubject.next(newValues)
}
