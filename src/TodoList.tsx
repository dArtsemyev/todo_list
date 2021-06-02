import React from "react";
import {TaskType} from "./App";

type PropsTodoListType = {
    title: string
    tasks: Array<TaskType>
}

function TodoList(props: PropsTodoListType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}

export default TodoList;