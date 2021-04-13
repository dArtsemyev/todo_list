import React, {ChangeEvent} from "react";
import {filterValuesType} from "./App";
import {AddNewItem} from "./AddNewItem";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
            <h3><EditableSpan title={props.title} onChange={ChangeTodoListTitle}/>
                <IconButton onClick={onRemoveTodoList}><Delete/></IconButton>
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
                            <Checkbox
                                color={"primary"}
                                onChange={onChangeStatusHandler}
                                checked={t.isDone}
                            />


                            <EditableSpan title={t.title}
                                          onChange={onChangeTitleHandler}/>

                            <IconButton onClick={onRemoveHandler}>
                                <Delete />
                            </IconButton>
                        </li>
                    })
                }
            </ul>
            <div>
                <Button style={{marginRight: "5px"}}
                        size={"small"}
                        color={"primary"}
                        variant={props.filter === "all" ? "outlined" : "contained"}
                    //className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>All</Button>

                <Button style={{marginRight: "5px"}}
                        size={"small"}
                        color={"primary"}
                        variant={props.filter === "active" ? "outlined" : "contained"}
                    //className={props.filter === "active" ? "active-filter" : ""}
                        onClick={onActiveClickHandler}>Active</Button>

                <Button style={{marginRight: "5px"}}
                        size={"small"}
                        color={"primary"}
                        variant={props.filter === "completed" ? "outlined" : "contained"}
                    //className={props.filter === "completed" ? "active-filter" : ""}
                        onClick={onCompletedClickHandler}>Completed</Button>
            </div>
        </div>
    );
}

