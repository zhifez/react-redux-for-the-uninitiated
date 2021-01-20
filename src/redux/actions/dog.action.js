export const GET_RANDOM_DOG = 'GET_RANDOM_DOG';
export const RANDOM_DOG_IS_LOADING = 'RANDOM_DOG_IS_LOADING';
export const RANDOM_DOG_LOAD_FAILED = 'RANDOM_DOG_LOAD_FAILED';
export const RANDOM_DOG_LOAD_SUCCESS = 'RANDOM_DOG_LOAD_SUCCESS';

export const getRandomDog = () => {
  return {
    type: GET_RANDOM_DOG
  };
}