import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList />
    </div>
  );
}

export default App;
