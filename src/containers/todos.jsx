import React, { useState } from 'react';

const createTodo = ( title ) => {
  return {
    title,
    isChecked: false
  };
}

export default function Todos () {
  const [ todos, setTodos ] = useState ( [
    createTodo ( 'Do groceries' ),
    createTodo ( 'Do laundry' ),
    createTodo ( 'Fix computer' ),
    createTodo ( 'Upgrade TV firmware' )
  ] );

  const onChangeTodo = ( index ) => ( { target: value } ) => {
    const nextTodos = [ ...todos ];
    nextTodos[ index ].isChecked = value.checked;
    setTodos ( nextTodos );
  }

  return (
    <>
      <h1>Todos with useState</h1>
      <ul style={{width: 200}}>
        {todos.map ( ( todo, index ) =>
        <li key={index} className={'flex-center'}>
          <input 
            className={'mr-2'}
            type={'checkbox'} 
            checked={todo.isChecked} 
            onChange={onChangeTodo ( index )} 
          />
          <span
            style={{
              textDecoration: todo.isChecked ? 'line-through' : 'none'
            }}
          >{todo.title}</span>
        </li>)}
      </ul>
    </>
  ); 
}