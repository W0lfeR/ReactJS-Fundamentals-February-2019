import React from 'react';
import './register.css';

class RegisterForm extends React.Component {

    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                }}>
                    <label>Username</label>
                    <input type="text" id="usernameReg"/>
                    <label>Email</label>
                    <input type="text" id="emailReg"/>
                    <label>Password</label>
                    <input type="password" id="passwordReg"/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;