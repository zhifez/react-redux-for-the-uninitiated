import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../redux/actions/todo.action';

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: ( index, value ) => dispatch ( todoActions.updateTodo ( index, value ) ),
    deleteTodo: ( index ) => dispatch ( todoActions.deleteTodo ( index ) ),
    createNewTodo: ( index ) => dispatch ( todoActions.createNewTodo ( index ) ),
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
) ( function Todos ( {
  todos,
  updateTodo,
  deleteTodo,
  createNewTodo
} ) {
  const [ newTodoTitle, setNewTodoTitle ] = useState ( '' );

  return (
    <>
      <h1>Todos with Redux</h1>
      <ul>
        {todos.map ( ( todo, index ) =>
        <li key={index} className={'flex-center mb-2'}>
          <button className={'bg-red mr-2'}
            onClick={() => deleteTodo ( index )}
          >
            X
          </button>
          <input 
            className={'mr-2'}
            type={'checkbox'} 
            checked={todo.isChecked} 
            onChange={e => updateTodo ( index, e.target.checked )} 
          />
          <span
            style={{
              textDecoration: todo.isChecked ? 'line-through' : 'none'
            }}
          >{todo.title}</span>
        </li>)}
      </ul>
      <form className={'flex-center'} onSubmit={createNewTodo}>
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
} );