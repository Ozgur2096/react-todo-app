import React, { useState } from 'react';

export const Form = ({ todos, setTodos, setStatus }) => {
  const [inputText, setInputText] = useState('');

  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputText('');
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={e => {
          inputTextHandler(e);
        }}
        type='text'
        className='todo-input'
      />
      <button
        className='todo-button'
        type='submit'
        onClick={e => {
          submitTodoHandler(e);
        }}
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select
          onChange={e => {
            statusHandler(e);
          }}
          name='todos'
          className='filter-todo'
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
