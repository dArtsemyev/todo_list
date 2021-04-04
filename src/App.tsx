import React, {useState} from "react";
import "./App.css";
import {taskType, TodoList} from "./TodoList";
import {v1} from "uuid";

export type filterValuesType = "all" | "active" | "completed";

export type TodoListType = {
    id: string
    title: string
    filter: filterValuesType
}

export type TasksStateType = {
    [key: string]: Array<taskType>
}

function App() {

    const todoListID_1 = v1();
    const todoListID_2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        { id: todoListID_1, title: "What to learn", filter: "all" },
        { id: todoListID_2, title: "What to buy", filter: "all" }
    ]);

    let [tasks, setTasks] = useState<TasksStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML/CSS", isDone: true },
            {id: v1(), title: "JS", isDone: false }
        ],
        [todoListID_2]: [
            {id: v1(), title: "Milk", isDone: false },
            {id: v1(), title: "Beer", isDone: true }
        ]
    })

    function removeTask(id: string, todoListID: string) {
        let todoListTasks = tasks[todoListID]
        tasks[todoListID] = todoListTasks.filter(t => t.id !== id)
        setTasks({...tasks})
    }

    function addTask(title: string, todoListID: string) {
        let task = {id: v1(), title: title, isDone: false}
        let todoListTasks = tasks[todoListID]
        tasks[todoListID] = [task, ...todoListTasks]
        setTasks({...tasks})
    }

    function changeFilter(value: filterValuesType, todoListID: string) {
        let todoList =todoLists.find(tl => tl.id === todoListID);
        if(todoList) {
            todoList.filter = value
            setTodoLists([...todoLists])
        }
    }

    function changeStatus(taskID: string, isDone: boolean, todoListID: string) {
        let todoListTasks = tasks[todoListID]
        let task = todoListTasks.find(t => t.id === taskID)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }

    }

    function removeTodoList(id: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }

    return (
        <div className="App">
            {
                todoLists.map(tl => {
                    let allTodoListTasks = tasks[tl.id]
                    let tasksForTodoList = allTodoListTasks

                    if(tl.filter === "active") {
                        tasksForTodoList = allTodoListTasks.filter(t => t.isDone === false)
                    }
                    if(tl.filter === "completed") {
                        tasksForTodoList = allTodoListTasks.filter(t => t.isDone === true)
                    }

                    return <TodoList
                        id={tl.id}
                        key={tl.id}
                        title={tl.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodoList={removeTodoList}
                    />
                })
            }
        </div>
    );
}

export default App;
