import {
  UPDATE_TODO,
  DELETE_TODO,
  CREATE_NEW_TODO
} from '../actions/todo.action';

const initialState = {
  todos: [
    { isChecked: false, title: 'Do groceries' },
    { isChecked: false, title: 'Do laundry' },
    { isChecked: false, title: 'Fix computer' },
    { isChecked: false, title: 'Update TV firmware' }
  ]
};

export default function reducer ( state = initialState, action ) {
  switch ( action.type ) {
  case UPDATE_TODO:
    let todos = [ ...state.todos ];
    todos[ action.index ].isChecked = action.isChecked;
      
    return {
      ...state,
      todos
    };
      
  case DELETE_TODO:
    todos = [ ...state.todos ];
    todos.splice ( action.index, 1 );
      
    return {
      ...state,
      todos
    };
      
  case CREATE_NEW_TODO:
    todos = [ ...state.todos ];
    todos.push ( { isChecked: false, title: action.title } );
      
    return {
      ...state,
      todos
    };
  
  default:
    return state;
  }
}