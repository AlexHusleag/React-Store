import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Cars from './containers/Cars/Cars';
import Toys from './containers/Toys/Toys';
import './App.css';
import TVs from './containers/TVs/TVs';
import { FirebaseContext } from './components/Firebase/';

import ShowcaseItem from './containers/HomePage/Item/Showcase-Item/Showcase-Item'

import { Route, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <FirebaseContext.Consumer>
            {
              firebase => (
                <Switch>

                  <Route path={"/product"}>
                    <ShowcaseItem />
                  </Route>

                  <Route path="/">
                    <Layout>
                      {/* <Cars firebase={firebase} />
                          <Toys firebase={firebase} />
                          <TVs firebase={firebase} /> */}
                    </Layout>
                  </Route>

                </Switch>
              )
            }
          </FirebaseContext.Consumer>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
