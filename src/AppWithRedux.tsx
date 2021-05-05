import React, {useReducer} from "react";
import "./App.css";
import {taskType, TodoList} from "./TodoList";
import {v1} from "uuid";
import {AddNewItem} from "./AddNewItem";
import {AppBar, Toolbar, Button, IconButton, Typography, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistAC,
    ChangeFilterAC,
    ChangeTodoListTitleAC,
    RemoveTodolistAC,
    todoListsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";

export type filterValuesType = "all" | "active" | "completed";

export type TodoListType = {
    id: string
    title: string
    filter: filterValuesType
}

export type TasksStateType = {
    [key: string]: Array<taskType>
}

function AppWithReducer() {

    const todoListID_1 = v1();
    const todoListID_2 = v1();

    let [todoLists, dispatchToTodoList] = useReducer(todoListsReducer, [
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"}
    ]);

    let [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todoListID_1]: [
            {id: v1(), title: "HTML/CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        [todoListID_2]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "Beer", isDone: true}
        ],
    })

    function removeTask(id: string, todoListID: string) {
        let action = removeTaskAC(id, todoListID)
        dispatchToTasks(action)
    }
    function addTask(title: string, todoListID: string) {
        let action = addTaskAC(title, todoListID)
        dispatchToTasks(action)
    }
    function changeStatus(taskID: string, isDone: boolean, todoListID: string) {
        dispatchToTasks(changeTaskStatusAC(taskID, isDone, todoListID))
    }
    function changeTaskTitle(taskID: string, newTitle: string, todoListID: string) {

        dispatchToTasks(changeTaskTitleAC(taskID, newTitle, todoListID))
    }
    function removeTodoList(id: string) {
        dispatchToTodoList(RemoveTodolistAC(id))
        dispatchToTasks(RemoveTodolistAC(id))
    }
    function changeFilter(value: filterValuesType, todoListID: string) {
        let action = ChangeFilterAC(value, todoListID)
        dispatchToTodoList(action)
    }
    function changeTodoListTitle(id: string, newTitle: string) {
        dispatchToTodoList(ChangeTodoListTitleAC(id, newTitle))
    }
    function addTodoList(title: string) {
        let action = AddTodolistAC(title)
        dispatchToTodoList(action)
        dispatchToTasks(action)
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

export default AppWithReducer;
