import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './app.css';
import Header from './header/header';
import NewsFeed from './newsfeed/newsfeed';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Switch>
            <Route exact path='/' component={NewsFeed}/>
          </Switch>
        </Header>
      </div>
    );
  }
}

export default App;
