import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './app.css';
import Header from './header/header';
import NewsFeed from './newsfeed/newsfeed';
import Board from './board/board';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Switch>
            <Route exact path='/' component={NewsFeed}/>
            <Route exact path='/leaderboard' component={Board}/>
          </Switch>
        </Header>
      </div>
    );
  }
}

export default App;
