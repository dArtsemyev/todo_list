import React, {useState} from "react";
import "./App.css";
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean | undefined
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL:
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML/CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTask = (id: number) => {
        let filteredTask = tasks.filter(task => task.id !== id)
        setTasks(filteredTask)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
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
            />
        </div>
    );
}

export default App;
