import React, {ChangeEvent, KeyboardEvent, useState} from "react";

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
            <input placeholder={'Add a new item...'}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addItem}>+</button>
            {error && <div className={"error-message"}>{error}</div>}
        </div>
    )

}