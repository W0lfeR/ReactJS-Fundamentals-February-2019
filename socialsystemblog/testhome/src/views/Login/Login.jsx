// import React, { Component } from 'react'

// class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             email: "",
//             password: "",
//             error: "",
//         }
//     }
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="mt-5 mb-5">Login</h1>
//                 <form>
//                     <div className="form-group">
//                         <label className="text-muted">Name</label>
//                         <input type="text" className="form-control" />
//                     </div>

//                     <div className="form-group">
//                         <label className="text-muted">Email</label>
//                         <input type="text" className="form-control" />
//                     </div>

//                     <div className="form-group">
//                         <label className="text-muted">Password</label>
//                         <input type="text" className="form-control" />
//                     </div>

//                     <button className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Login

import React from "react";
import { Redirect } from "react-router-dom";

import loginValidator from "../../utils/loginValidator";
import Input from "./Input";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (!loginValidator(this.state.email, this.state.password)) {
      return;
    }
    this.props.loginUser(this.state);
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <section
        className="form"
      >
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <Input
            type="email"
            onChange={this.handleChange}
            label="e-mail"
            name="email"
            id="emailLogin"
          />
          <Input
            type="password"
            onChange={this.handleChange}
            label="Password"
            name="password"
            id="passwordLogin"
          />
          <input type="submit" value="Login" />
        </form>
      </section>
    );
  }
}

export default Login;

