import React from "react"
import { ITodo } from "../api/todos"

const TodoItem: React.FC<ITodo> = ({ completed, todo }) => {

    return (
        <div className="flex gap-2">
            <input type="checkbox" defaultChecked={completed} /><p>{todo}</p>
        </div>
    )
}

export default TodoItem