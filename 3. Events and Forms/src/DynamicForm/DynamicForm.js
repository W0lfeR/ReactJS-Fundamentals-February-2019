import React from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LoginForm";
import CreateForm from "../Games/CreateForm";

class DynamicForm extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {
                        this.props.user ?
                            <CreateForm 
                            createGame={this.props.createGame}
                            /> :

                            this.props.loginForm ?
                                <LogInForm
                                    loginUser={this.props.loginUser}
                                /> :
                                <RegisterForm
                                    registerUser={this.props.registerUser}
                                />
                    }
                    {/*TODO: render a form depending on wheather the loginForm property is true*/}
                </div>
            </div>
        )
    }
}

export default DynamicForm