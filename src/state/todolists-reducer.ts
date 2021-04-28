import {filterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST"
    id: string
}
export type AddTodoListAT = {
    type: "ADD-TODOLIST"
    title: string
    id: string
}
export type ChangeTodoListTitleAT = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    newTitle: string
}
export type ChangeTodoListFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    value: filterValuesType
    todoListID: string
}
export type ActionType = RemoveTodolistAT
    | AddTodoListAT
    | ChangeTodoListTitleAT
    | ChangeTodoListFilterAT

export const todoListsReducer = (todoLists: Array<TodoListType>, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.id)

        case "ADD-TODOLIST":
            const newTodoListID = action.id
            const newTodolist: TodoListType = {
                id: newTodoListID, title: action.title, filter: "all"
            }
            return [...todoLists, newTodolist]

        case "CHANGE-TODOLIST-TITLE":
            const todolist = todoLists.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.newTitle
                return [...todoLists]
            } else {
                return todoLists
            }
        case "CHANGE-TODOLIST-FILTER":
            let todoList = todoLists.find(tl => tl.id === action.todoListID)
            if (todoList) {
                todoList.filter = action.value
                return [...todoLists]
            } else {
                return todoLists
            }
        default:
            return todoLists
    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistAT => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const AddTodolistAC = (newTodolistTitle: string): AddTodoListAT => {
    return { type: 'ADD-TODOLIST', title: newTodolistTitle, id: v1()}
}
