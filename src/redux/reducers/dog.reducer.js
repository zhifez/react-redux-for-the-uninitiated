import {
  RANDOM_DOG_IS_LOADING,
  RANDOM_DOG_LOAD_FAILED,
  RANDOM_DOG_LOAD_SUCCESS
} from '../actions/dog.action';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export default function reducer ( state = initialState, action ) {
  switch ( action.type ) {
  case RANDOM_DOG_IS_LOADING:
    return {
      ...initialState,
      isLoading: true
    };

  case RANDOM_DOG_LOAD_FAILED:
    return {
      ...initialState,
      error: action.error
    };

  case RANDOM_DOG_LOAD_SUCCESS:
    return {
      ...initialState,
      data: action.data
    };

  default:
    return state;
  }
}