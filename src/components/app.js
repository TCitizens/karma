import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './app.css';
import Header from './header/header';
import newsFeedContainer from './newsfeed/newsFeedContainer';
import Board from './board/board';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Switch>
            <Route exact path='/' component={newsFeedContainer}/>
            <Route exact path='/leaderboard' component={Board}/>
          </Switch>
        </Header>
      </div>
    );
  }
}

export default App;
