import React, {Component} from 'react';
import {HashRouter, Switch, Route} from "react-router-dom"
import Chess from './code/chess/chess';
import Start from './code/start/start';


class App extends Component {
  render() { 
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path='/' component={Start} exact></Route>
            <Route path='/chess' component={Chess} ></Route>
          </Switch>
        </div>  
      </HashRouter>
    );
  }
}
export default App;
