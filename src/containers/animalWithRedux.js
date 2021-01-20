import React from 'react';
import { connect } from 'react-redux';
import * as catActions from '../redux/actions/cat.action';
import * as dogActions from '../redux/actions/dog.action';

const mapStateToProps = state => {
  return {
    catFacts: state.catReducer,
    randomDog: state.dogReducer
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCatFacts: () => dispatch ( catActions.getCatFacts () ),
    getRandomDog: () => dispatch ( dogActions.getRandomDog () )
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
) ( function AnimalWithRedux ( {
  catFacts,
  randomDog,

  getCatFacts,
  getRandomDog
} ) {
  return (
    <>
      <h1>Random Cat Facts</h1>
      {catFacts.isLoading ? <h3>Loading...</h3> : <h3>{catFacts.data}</h3>}
      <br />
      <button onClick={() => getCatFacts ()}>Get Random Cat Facts</button>

      <hr />
      
      <h1>Random Dog Image</h1>
      {randomDog.isLoading ? <h3>Loading...</h3> : <img src={randomDog.data} width={300} />}
      <br />
      <button onClick={getRandomDog}>Get Random</button>
    </>
  );
} );