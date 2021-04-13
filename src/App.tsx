import React, {useState} from "react";
import "./App.css";
import {taskType, TodoList} from "./TodoList";
import {v1} from "uuid";
import {AddNewItem} from "./AddNewItem";
import {AppBar, Toolbar, Button, IconButton, Typography, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

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
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"}
    ]);

    let [tasks, setTasks] = useState<TasksStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML/CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        [todoListID_2]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "Beer", isDone: true}
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
        let todoList = todoLists.find(tl => tl.id === todoListID);
        if (todoList) {
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

    function changeTaskTitle(taskID: string, newTitle: string, todoListID: string) {
        let todoListTasks = tasks[todoListID]
        let task = todoListTasks.find(t => t.id === taskID)
        if (task) {
            task.title = newTitle
            setTasks({...tasks})
        }
    }

    function removeTodoList(id: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }

    function changeTodoListTitle(id: string, newTitle: string) {
        const todolist = todoLists.find(tl => tl.id === id)
        if (todolist) {
            todolist.title = newTitle
            setTodoLists([...todoLists])
        }
    }

    function addTodoList(title: string) {
        const newTodoListID = v1()
        const newTodolist: TodoListType = {
            id: newTodoListID, title, filter: "all"
        }
        setTodoLists([...todoLists, newTodolist])
        setTasks({...tasks, [newTodoListID]: []})
    }

    const todoListComponents = todoLists.map(tl => {
        let tasksForTodoList = tasks[tl.id]

        if (tl.filter === "active") {
            tasksForTodoList = tasksForTodoList.filter(t => !t.isDone)
        }
        if (tl.filter === "completed") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone)
        }

        return (
            <Grid item key={tl.id}>
                <Paper elevation={6} style={{padding: "15px"}}>
                    <TodoList
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        changeTaskTitle={changeTaskTitle}
                        filter={tl.filter}
                        removeTodoList={removeTodoList}
                        changeTodoListTitle={changeTodoListTitle}/>
                </Paper>
            </Grid>
        )
    })

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TodoList
                    </Typography>
                    <Button variant={"outlined"} color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Grid container={true} style={{padding: "20px 0px"}}>
                    <AddNewItem addItem={addTodoList}/>
                </Grid>
                <Grid container={true} spacing={2}>
                    {
                        todoListComponents
                    }
                </Grid>
            </Container>


        </div>
    );
}

export default App;
