import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";

type AddNewItemPropsType = {
    addItem: (title: string) => void
}

export function AddNewItem(props: AddNewItemPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<null | string>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addItem()
        }
    }
    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    return (
        <div>
            <TextField variant={"outlined"}
                       size={"small"}
                       label={"Add a new item..."}
                       //placeholder={'Add a new item...'}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       error={!!error}
                       //className={error ? "error" : ""}
                helperText={error}
            />
            <Button variant={"contained"} size="small" color={"primary"} style={{marginLeft: "5px"}} onClick={addItem}>+</Button>
            {/*{error && <div className={"error-message"}>{error}</div>}*/}
        </div>
    )

}