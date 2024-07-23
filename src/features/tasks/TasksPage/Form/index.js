import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Sheet, Button } from "./styled";
import { addTask } from '../../tasksSlice';
import Input from '../../Input';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <Sheet onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                required
                autoFocus={true}
                id="input"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </Sheet>
    );
};

export default Form;