import {
  UPDATE_RATING,
  DELETE_RATING,
  CREATE_NEW_RATING
} from '../actions/rating.action';

const initialState = {
  ratings: [
    { rating: 0, title: 'Nike Sneakers' },
    { rating: 0, title: 'Adidas Running Shoes' },
    { rating: 0, title: 'Yonex Badminton Racquet' }
  ]
};

export default function reducer ( state = initialState, action ) {
  switch ( action.type ) {
  case UPDATE_RATING:
    let ratings = [ ...state.ratings ];
    let rating = action.rating;
    if ( rating < 0 ) {
      rating = 0;
    }
    else if ( rating > 5 ) {
      rating = 5;
    }
    ratings[ action.index ].rating = rating;
      
    return {
      ...state,
      ratings
    };
      
  case DELETE_RATING:
    ratings = [ ...state.ratings ];
    ratings.splice ( action.index, 1 );
      
    return {
      ...state,
      ratings
    };
      
  case CREATE_NEW_RATING:
    ratings = [ ...state.ratings ];
    ratings.push ( { rating: false, title: action.title } );
      
    return {
      ...state,
      ratings
    };
  
  default:
    return state;
  }
}