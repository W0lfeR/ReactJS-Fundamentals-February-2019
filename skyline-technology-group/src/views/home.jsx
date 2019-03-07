import React, { Component } from 'react';

 class Home extends Component {
    render() {
        return (
            <main>
            <div className="welcome-wrapper">
              <div className="welcome">
                <h1>Welcome to our book store, tanya !</h1>
                <p><a href="/store">Go To Store</a><a href="/orders">View your orders</a></p>
              </div>
            </div>
            </main>
        );
    }
}

export default Home;
