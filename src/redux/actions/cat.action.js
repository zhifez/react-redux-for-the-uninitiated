export const GET_CAT_FACTS = 'GET_CAT_FACTS';
export const CAT_FACTS_IS_LOADING = 'CAT_FACTS_IS_LOADING';
export const CAT_FACTS_LOAD_FAILED = 'CAT_FACTS_LOAD_FAILED';
export const CAT_FACTS_LOAD_SUCCESS = 'CAT_FACTS_LOAD_SUCCESS';

export const getCatFacts = () => {
  return {
    type: GET_CAT_FACTS
  };
}