/* eslint react/require-default-props: 0 */
/* eslint camelcase: 0 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './static/css/app.css';
import MiaApp from './MiaApp';
import store from "./store";
import Mia from '../src/pages';
import indexRoutes from "../src/routes/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MiaApp dispatch={store.dispatch} getState={store.getState}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
              })}
            </Switch>
            {/* <Switch>
              <Route exact path="/" component={Mia}/>
            </Switch> */}
          </MiaApp>
        </Router>
      </Provider>
    );
  }
}

export default App;