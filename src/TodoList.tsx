import React, {ChangeEvent} from "react";
import {filterValuesType} from "./App";
import {AddNewItem} from "./AddNewItem";
import {EditableSpan} from "./EditableSpan";

export type taskType = {
    id: string
    title: string
    isDone: boolean
}
type propsType = {
    id: string
    title: string
    tasks: Array<taskType>
    removeTask: (id: string, todoListID: string) => void
    changeFilter: (value: filterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    changeTaskTitle: (taskID: string, newTitle: string, todoListID: string) => void
    filter: filterValuesType
    removeTodoList: (todoListID: string) => void
    changeTodoListTitle: (id: string, newTitle: string) => void
}

export function TodoList(props: propsType) {

    const addTask = (title: string) => props.addTask(title, props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id)
    const onActiveClickHandler = () => props.changeFilter("active", props.id)
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id)
    const onRemoveTodoList = () => props.removeTodoList(props.id)
    const ChangeTodoListTitle = (newTitle: string) => {
        props.changeTodoListTitle(props.id, newTitle)
    }

    return (
        <div>
            <h3><EditableSpan title={props.title} onChange={ ChangeTodoListTitle }/>
                <button onClick={onRemoveTodoList}>x</button>
            </h3>
            <AddNewItem addItem={addTask}/>
            <ul>
                {
                    props.tasks.map(t => {

                        const onRemoveHandler = () => props.removeTask(t.id, props.id)
                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
                        }
                        const onChangeTitleHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id);
                        }


                        return <li className={t.isDone ? "is-done" : ""} key={t.id}>
                            <input type="checkbox" onChange={onChangeStatusHandler} checked={t.isDone}/>

                            <EditableSpan title={t.title}
                                          onChange={onChangeTitleHandler}/>

                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>All</button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                        onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === "completed" ? "active-filter" : ""}
                        onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}

