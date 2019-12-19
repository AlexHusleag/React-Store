import React, { Component } from 'react';
import Cars from './containers/Cars/Cars';
import Toys from './containers/Toys/Toys';
import './App.css';
import TVs from './containers/TVs/TVs';
import { FirebaseContext } from './components/Firebase/'

class App extends Component {
  render() {
    return (
      <div>
        <FirebaseContext.Consumer>
          {
            firebase => (
              <div>
                <Cars firebase={firebase} />
                <Toys firebase={firebase} />
                <TVs firebase={firebase} />
              </div>
            )
          }
        </FirebaseContext.Consumer>
      </div>
    )
  }
}

export default App;
