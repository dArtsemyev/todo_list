import React, {useState} from "react";
import "./App.css";
import TodoList from "./TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean | undefined
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL:
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML/CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTask = (id: string) => {
        let filteredTask = tasks.filter(task => task.id !== id)
        setTasks(filteredTask)
    }
    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title, isDone: false}
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    let tasksForTodoList = tasks

    if(filter === "completed") {
        tasksForTodoList = tasks.filter(task => task.isDone === true)
    }
    if(filter === "active") {
        tasksForTodoList = tasks.filter(task => task.isDone === false)
    }

    // UI:
    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
