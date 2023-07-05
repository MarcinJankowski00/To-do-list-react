import { useState } from 'react';
import { Sheet, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <Sheet onSubmit={onFormSubmit}>
            <Input
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