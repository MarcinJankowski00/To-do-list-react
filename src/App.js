import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';

const tasks = [
  { id: 1, content: "test1", done: true },
  { id: 2, content: "test2", done: false }
];

function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "test1", done: true },
    { id: 2, content: "test2", done: false }
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

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
        content={<List tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        extraElementContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
