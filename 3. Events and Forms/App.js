import React, { Component } from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }

    registerUser(data) {
        fetch('http://localhost:9999/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('username', res.username)
                localStorage.setItem('userId', res.userId)
                this.setState({
                    user: res.username
                })
            })
            .catch(error => console.error('Error:', error));

    };



    loginUser(data) {
        fetch('http://localhost:9999/auth/signin', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('username', res.username)
                localStorage.setItem('userId', res.userId)
                this.setState({
                    user: res.username
                })
            })
            .catch(error => console.error('Error:', error));
    };
    

    logout(event) {
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        this.setState({
            user: null
        })
    }

    componentWillMount() {
        const localUsername = localStorage.getItem('username');
        if (localStorage.getItem('username')) {
            this.setState({
                user: localUsername
            })
            
            this.fetchGames();
        }
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)

        // TODO: fetch all the games
    }

    createGame(data) {
        
        fetch('http://localhost:9999/feed/game/create', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.fetchGames();
                
            })
            .catch(error => console.error('Error:', error)); 
    }

    fetchGames(){
        fetch('http://localhost:9999/feed/games')
        .then(res => res.json())
            .then(res => {
                this.setState({
                    games: res.games
                })
            })
            .catch(error => console.error('Error:', error)); 
    }

    switchForm() {
        this.setState({
            loginForm: !this.state.loginForm
        })
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                />
                <AppFooter />
            </main>
        )
    }
}

export default App;


