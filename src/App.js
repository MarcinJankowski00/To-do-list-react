import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';

const tasks = [
  { id: 1, content: "test1", done: true },
  { id: 2, content: "test2", done: false }
];
const doneTasksHide = false;

function App() {
  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
      />
      <Section
        title="Lista zadań"
        content={<List tasks={tasks} doneTasksHide={doneTasksHide} />}
        extraElementContent={<Buttons tasks={tasks} doneTasksHide={doneTasksHide} />}
      />
    </Container>
  );
}

export default App;
