import React, { Component } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      username: null,
      isAdmin: false,
      movies: []
    }
  }

  componentWillMount(){
    const isAdmin = localStorage.getItem('isAdmin')
    if (localStorage.getItem('username')) {
      this.setState({
        username: localStorage.getItem('username'),
        isAdmin,
      })
    }
    fetch('http://localhost:9999/feed/movies')
    .then(rawData => rawData.json())
      .then(
      body =>{
        this.setState({
          movies: body.movies
        })
        if (!body.errors) {
          toast.success(body.message);  
        }
        else{
          toast.error(body.message);
        }      
      }
      )
    .catch(error => console.error(error));
  }


  handleChange(e, data) {
    this.setState({
      [e.target.name]: e.target.value
      
    })

  }

  handleSubmit(e, data, isSignUp) {
    e.preventDefault()
    //console.log(data);
    
    fetch('http://localhost:9999/auth/sign' +(isSignUp ? 'up': 'in'), {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    .then(
      rawData => rawData.json()
    )
      .then(
      body =>{
        if (body.username) {
          this.setState({
            username: body.username,
            isAdmin : body.isAdmin
          })
          localStorage.setItem('username',body.username )
          localStorage.setItem('isAdmin',body.isAdmin )
          toast.success('Welcome' + body.username);  
          this.props.history.push('/');
        }
        else{
          toast.error(body.message);
        }      
      }
      )
    .catch(error => console.error(error));

    console.log(localStorage);
    
  }

  handleCreateSubmit(e, data) {
    e.preventDefault()
    //console.log(data);
    
    fetch('http://localhost:9999/feed/movie/create', {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    .then(rawData => rawData.json())
      .then(
      body =>{
        if (!body.errors) {
          toast.success(body.message); 
          
          this.props.history.push('/');
          this.componentWillMount()
        }
        else{
          toast.error(body.message);
        }      
      }
      )
    .catch(error => console.error(error));
  }

  logout() {
    
    this.setState({
        username: null,
        isAdmin: false
    })
    
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    
}

  render() {
    return (
      <div className="App">
      <ToastContainer/>
        <Header username={this.state.username} isAdmin={this.state.isAdmin} isLogedOut ={this.logout.bind(this)} />
        <Switch>
            <Route exact path="/" render={() =>
              <Home
                movies = {this.state.movies}
              />} 
            />;

            <Route path="/register" render={() =>
              <Register
                handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange} 
              />}
            />;
            
            <Route path="/login" render={() =>
              <Login
                handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange}
                history={this.props.history}
              />
            }
            />;

            <Route path="/logout" render={()=> {
            this.logout();
            return (
              <Redirect to="/login" />
              )}
            }       
             />;
          
          <Route path="/create" render={() =>
          this.state.isAdmin ? 

              <Create
                handleCreateSubmit={this.handleCreateSubmit.bind(this)}
                handleChange={this.handleChange}
              />:
              <Redirect to="/login" />
            }
             />;
          
          <Route render={() => <h1>Not found!</h1>} />;
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);