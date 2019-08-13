import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import MovieList from "./MovieList"
import MovieDetail from "./MovieDetail"

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/movies" component={MovieList} exact />
      <Route path="/movies/:movieId" component={MovieDetail} exact />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
