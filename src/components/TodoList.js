import React from 'react';
import { Todo } from './Todo';

export const TodoList = () => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        <Todo />
      </ul>
    </div>
  );
};
