import React from "react";

export default class SecurityUserUpdateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            username: this.props.user.username,
            securityRoles: this.props.user.securityRoles
                .map(e => e.id)
                .sort((a,b) => a > b ? 1 : -1)
                .toString(),
            nacRoles: this.props.user.nacRoles
                .map(e => e.id)
                .sort((a,b) => a > b ? 1 : -1)
                .toString(),
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeSecurityRoles = this.onChangeSecurityRoles.bind(this);
        this.onChangeNacRoles = this.onChangeNacRoles.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeSecurityRoles(e) {
        this.setState({
            securityRoles: e.target.value
        });
    }

    onChangeNacRoles(e) {
        this.setState({
            nacRoles: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const updatedUser = {
            id: this.props.user.id,
            username: this.state.username,
            securityRoles: this.state.securityRoles.split(','),
            nacRoles: this.state.nacRoles.split(',')
        }
        this.props.onUpdate(JSON.stringify(updatedUser));
        window.location = "#";
        //window.location.reload();
    }

    render() {
        const inputs = [
            <label>
                <p key={this.props.user.username}>
                    Username:
                    <input
                        value={this.state.username}
                        onChange={this.onChangeUsername}/>
                </p>
            </label>,
            <label>
                <p key={this.props.user.securityRoles}>
                    Security Roles:
                    <input
                        value={this.state.securityRoles}
                        onChange={this.onChangeSecurityRoles}/>
                </p>
            </label>,
            <label>
                <p key={this.props.user.nacRoles}>
                    Nac Roles:
                    <input
                        value={this.state.nacRoles}
                        onChange={this.onChangeNacRoles}/>
                </p>
            </label>,
        ];

        const dialogId = "updateSecurityUser-" + this.props.user.id;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Update a security user</h2>
                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}