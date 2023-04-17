import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';
import { useEffect } from 'react';

function App() {
  if ((localStorage.getItem("tasks")) === null) {
    localStorage.setItem("tasks", "[]");
  };

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => setTasks((tasks) =>
    tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task)
  );

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        content={
          <List
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraElementContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
