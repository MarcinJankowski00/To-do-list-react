import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Container from '../../common/Container';

function Tasks() {
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
        content={<List />}
        extraElementContent={<Buttons/>}
      />
    </Container>
  );
}

export default Tasks;
