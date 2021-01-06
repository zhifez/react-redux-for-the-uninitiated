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
  const [ newTodoTitle, setNewTodoTitle ] = useState ( '' );

  const onToggleTodo = ( index ) => ( { target: value } ) => {
    const nextTodos = [ ...todos ];
    nextTodos[ index ].isChecked = value.checked;
    setTodos ( nextTodos );
  }

  const onDeleteTodo = ( index ) => {
    const nextTodos = [ ...todos ];
    nextTodos.splice ( index, 1 );
    setTodos ( nextTodos );
  }

  const onCreateTodo = ( e ) => {
    e.preventDefault ();
    if ( !!newTodoTitle && newTodoTitle.length >= 0 ) {
      const nextTodos = [ ...todos ];
      nextTodos.push ( createTodo ( newTodoTitle ) );
      setTodos ( nextTodos );
      setNewTodoTitle ( '' );
    }
  }

  return (
    <>
      <h1>Todos with useState</h1>
      <ul>
        {todos.map ( ( todo, index ) =>
        <li key={index} className={'flex-center mb-2'}>
          <button className={'bg-red mr-2'}
            onClick={() => onDeleteTodo ( index )}
          >
            X
          </button>
          <input 
            className={'mr-2'}
            type={'checkbox'} 
            checked={todo.isChecked} 
            onChange={onToggleTodo ( index )} 
          />
          <span
            style={{
              textDecoration: todo.isChecked ? 'line-through' : 'none'
            }}
          >{todo.title}</span>
        </li>)}
      </ul>
      <form className={'flex-center'} onSubmit={onCreateTodo}>
        <input 
          type={'text'} 
          name={'title'} 
          className={'mr-2'} 
          value={newTodoTitle}
          onChange={e => setNewTodoTitle ( e.target.value )}
        />
        <button type={'submit'}>Add Todo</button>
      </form>
    </>
  ); 
}