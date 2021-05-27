import React from "react";
import "./App.css";
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean | undefined
}

function App() {

    // BLL:
    const tasksToLearn: Array<TaskType> = [
        {id: 1, title: "HTML/CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasksToBuy: Array<TaskType> = [
        {id: 1, title: "Milk", isDone: true},
        {id: 2, title: "Beer", isDone: false},
        {id: 3, title: "Meat", isDone: false},
    ]

    // UI:
    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasksToLearn}/>
            <TodoList title={"What to buy"} tasks={tasksToBuy}/>
        </div>
    );
}

export default App;
