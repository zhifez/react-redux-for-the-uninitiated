
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CREATE_NEW_TODO = 'CREATE_NEW_TODO';

export const updateTodo = ( index, isChecked ) => {
  return {
    type: UPDATE_TODO,
    index,
    isChecked
  };
}

export const deleteTodo = ( index ) => {
  return {
    type: DELETE_TODO,
    index
  };
}

export const createNewTodo = ( title ) => {
  return {
    type: CREATE_NEW_TODO,
    title
  };
}