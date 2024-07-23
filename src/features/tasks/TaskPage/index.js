import React from 'react';
import Section from '../../../common/Section';
import Container from '../../../common/Container';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <header>
                <h1>Szczegóły zadania</h1>
            </header>
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                content={
                    <><strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}</>
                }
            />
        </Container>
    );
}

export default TaskPage;