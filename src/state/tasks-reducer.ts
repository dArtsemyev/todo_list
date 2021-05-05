import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodoListAT, RemoveTodolistAT} from "./todolists-reducer";

type RemoveTaskAT = {
    type: "REMOVE_TASK"
    taskId: string
    todolistId: string
}
type addTaskAT = {
    type: "ADD_TASK"
    title: string
    todolistId: string
}
type changeTaskAT = {
    type: "CHANGE_TASK"
    taskId: string
    isDone: boolean
    todolistId: string
}
type changeTaskTitleAT = {
    type: "CHANGE_TASK_TITLE_TASK"
    taskId: string
    title: string
    todolistId: string
}

const initialState: TasksStateType = {}

type ActionType = RemoveTaskAT
    | addTaskAT
    | changeTaskAT
    | changeTaskTitleAT
    | AddTodoListAT
    | RemoveTodolistAT

export const tasksReducer = (tasks = initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE_TASK": {
            let copyState = {...tasks}
            copyState[action.todolistId] = copyState[action.todolistId].filter( task => task.id !== action.taskId)
            return copyState
        }
        case "ADD_TASK": {
            let newTask = {id: v1(), title: action.title, isDone: false}
            return {...tasks, [action.todolistId]: [newTask, ...tasks[action.todolistId]]}
        }
        case "CHANGE_TASK": {
            let copyState = {...tasks}
            let updateTasksTodoList = copyState[action.todolistId].map(task => {
                if(task.id === action.taskId) {
                    return {...task, isDone: action.isDone}
                } else {
                    return task
                }
            })
            return {
                ...tasks,
                [action.todolistId]: updateTasksTodoList
            }
        }
        case "CHANGE_TASK_TITLE_TASK": {
            let copyState = {...tasks}
            let updateTasksTodoList = copyState[action.todolistId].map(task => {
                if(task.id === action.taskId) {
                    return {...task, title: action.title}
                } else {
                    return task
                }
            })
            return {
                ...tasks,
                [action.todolistId]: updateTasksTodoList
            }
        }
        case "ADD-TODOLIST": {
            return {...tasks, [action.id]:[]}
        }
        case "REMOVE-TODOLIST": {
            let copyState = {...tasks}
            delete copyState[action.id]
            return copyState
        }
        default:
            return tasks
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskAT => {
    return {type: "REMOVE_TASK", taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): addTaskAT => {
    return {type: "ADD_TASK", title, todolistId}
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskAT => {
    return {type: "CHANGE_TASK", taskId, isDone, todolistId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleAT => {
    return {type: "CHANGE_TASK_TITLE_TASK", taskId, title, todolistId}
}
