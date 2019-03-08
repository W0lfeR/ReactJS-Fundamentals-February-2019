import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/home'
import NotFound from './views/not-found'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <header>
              <nav class="navbar-menu">
              <a href="/" class="active" aria-current="page">Home</a>
              <a href="/computers">Computers</a>
                <a href="/orders">My Orders</a>
                <a href="/cart">Cart</a>
                <a href="javascript:void(0)">Logout</a>
                </nav>
            </header>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route component={NotFound} />
            </Switch>
            <div>
              <footer id="footer" class="page-footer mt-4">© Skyline Technology Group</footer>
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
