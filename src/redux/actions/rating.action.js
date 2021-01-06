
export const UPDATE_RATING = 'UPDATE_RATING';
export const DELETE_RATING = 'DELETE_RATING';
export const CREATE_NEW_RATING = 'CREATE_NEW_RATING';

export const updateRating = ( index, rating ) => {
  return {
    type: UPDATE_RATING,
    index,
    rating
  };
}

export const deleteRating = ( index ) => {
  return {
    type: DELETE_RATING,
    index
  };
}

export const createNewRating = ( title ) => {
  return {
    type: CREATE_NEW_RATING,
    title
  };
}