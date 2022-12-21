import React from "react";

export default class SecurityUserCreateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            username: "username",
            password: "password"
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.onCreate(JSON.stringify(user));
        window.location = "#";
        //window.location.reload();
    }

    render() {
        const inputs = [
            <label>
                <p>
                    Username:
                    <input
                        value={this.state.username}
                        onChange={this.onChangeUsername}/>
                </p>
            </label>,
            <label>
                <p>
                    Password:
                    <input
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                </p>
            </label>
        ];

        const dialogId = "createSecurityUser";

        return (
            <div>
                <a href={"#" + dialogId}>Create User</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Create a security user</h2>
                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}