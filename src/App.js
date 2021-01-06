import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Todos from './containers/todos';
import TodosWithRedux from './containers/todosWithRedux';
import TodosAndRatingsWithRedux from './containers/todosAndRatingsWithRedux';

const Home = () => (
  <>
    <h1>Welcome to source materials for: "React-Redux for the Uninitiated"</h1>
    <hr />
    <Link to={'/todos'}>Todos with useState</Link>
    <br />
    <Link to={'/todosWithRedux'}>Todos with Redux</Link>
    <br />
    <Link to={'/todosAndRatingsWithRedux'}>Todos and Ratings with Redux</Link>
    <br />
  </>
);

function App () {
  return (
    <Router>
      <div className={'App'}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/todos'} component={Todos} />
          <Route exact path={'/todosWithRedux'} component={TodosWithRedux} />
          <Route exact path={'/todosAndRatingsWithRedux'} component={TodosAndRatingsWithRedux} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
