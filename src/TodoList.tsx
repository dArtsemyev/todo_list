import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import {FilterValuesType, TaskType} from "./App";

type PropsTodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

function TodoList(props: PropsTodoListType) {

    const [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressInputValueHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addTask()
        }
    }
    const onClickChangeFilterHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.name === "all"){
            props.changeFilter("all")
        } else if(e.currentTarget.name === "active"){
            props.changeFilter("active")
        } else if(e.currentTarget.name === "completed"){
            props.changeFilter("completed")
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeInputValueHandler}
                    onKeyPress={onKeyPressInputValueHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={() => props.removeTask(task.id)}>x</button>
                            </li>
                        );
                    })
                }
            </ul>
            <div>
                <button name="all" onClick={onClickChangeFilterHandler}>All</button>
                <button name="active" onClick={onClickChangeFilterHandler}>Active</button>
                <button name="completed" onClick={onClickChangeFilterHandler}>Completed</button>
            </div>
        </div>
    );
}

export default TodoList;