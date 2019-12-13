import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="mt-5 mb-5">Login</h1>
                <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
