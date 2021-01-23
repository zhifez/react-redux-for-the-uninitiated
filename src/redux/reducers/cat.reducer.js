import {
  CAT_FACTS_IS_LOADING,
  CAT_FACTS_LOAD_FAILED,
  CAT_FACTS_LOAD_SUCCESS
} from '../actions/cat.action';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export default function reducer ( state = initialState, action ) {
  switch ( action.type ) {
  case CAT_FACTS_IS_LOADING:
    return {
      ...initialState,
      isLoading: true
    };

  case CAT_FACTS_LOAD_FAILED:
    return {
      ...initialState,
      error: action.error
    };

  case CAT_FACTS_LOAD_SUCCESS:
    return {
      ...initialState,
      data: action.data
    };

  default:
    return state;
  }
}