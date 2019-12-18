import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from './components/navbar/Navbar'
import Homepage from './views/homepage/Homepage'
import Login from './views/Login/Login'
import RegisterForm from './views/Register/Register';
import CreatePage from './views/Create/Create';
import Products from './views/Read/Read';
import EditProduct from "./views/Edit/EditProduct";
import {post} from "./data/crud"

import Footer from "./components/footer/Footer";
class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      isAdmin: false,
      preferredLocale: "en"
    };

    this.logout = this.logout.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  async registerUser(user) {
    await post("auth/signup", user)
      .then(res => {
        if (!res.success) {
          toast.error(res.message);
        } else {
          toast.success("User successfuly registered!");
          this.setState({
            loggedIn: true
          });
        }
      })
      .catch(err => {
        toast.error("Invalid credentials");
      });
  }

  async loginUser(user) {
    await post("auth/login", user)
      .then(res => {
        if (!res.success) {
          toast.error(res.message);
        } else {
          localStorage.setItem("userId", res.user.userId);
          localStorage.setItem("authToken", res.token);
          if (res.user.roles && res.user.roles.length > 0) {
            this.setState({
              isAdmin: true
            });
            localStorage.setItem("roles", res.user.roles);
          }

          this.setState({
            user: res.username,
            loggedIn: true
          });
          toast.success(res.message);
        }
      })
      .catch(err => {
        toast.error("Invalid credentials");
      });
  }

  logout(event) {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    localStorage.removeItem("roles");
    this.setState({
      loggedIn: false,
      user: null
    });
  }

  componentDidMount() {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    localStorage.removeItem("roles");
    this.setState({
      user: null
    });
  }

  render() {
    return (
      <Fragment>
        <ToastContainer />
        
          <Navbar {...this.props}  loggedIn={this.state.loggedIn} isAdmin={this.state.isAdmin} logout={this.logout} />
          <Switch>
            
            <Route exact path="/" component={Homepage} />
            <Route path="/products" render={() => (<Products isAdmin={this.state.isAdmin} loggedIn={this.state.loggedIn} preferredLocale={this.state.preferredLocale}/>)}/>
            <Route path="/product/create" render={() => ( <CreatePage isAdmin={this.state.isAdmin}  preferredLocale={this.state.preferredLocale}  />  )}  />
            <Route path="/product/edit/:id"  render={props => (<EditProduct {...props} isAdmin={this.state.isAdmin} /> )} />
            <Route path="/login" render={() => (<Login loginUser={this.loginUser} loggedIn={this.state.loggedIn}/> )} />
            <Route path="/register" render={() => ( <RegisterForm registerUser={this.registerUser}  loggedIn={this.state.loggedIn}/>)}/>
          </Switch>
          <Footer />
      </Fragment>
    );
  }
}
export default withRouter(MainRouter);
