import { useState, useRef } from 'react';
import { Sheet, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const focusInput = () => {
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
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </Sheet>
    );
};

export default Form;