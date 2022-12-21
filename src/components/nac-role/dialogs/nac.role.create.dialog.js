import React from "react";

export default class NacRoleCreateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            name: "example role name",
            networkResources: ''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeResources = this.onChangeResources.bind(this);
    }

    onChangeResources(e) {
        this.setState({
            networkResources: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        const networkResources = this.state.networkResources === ''? null : this.state.networkResources.split(',');
        const createRoles = {
            name: this.state.name,
            networkResources: networkResources
        }
        const createRolesArray = Array.of(createRoles);
        this.props.onCreate('{ "roles": ' + JSON.stringify(createRolesArray) + '}');
        window.location = "#";
        window.location.reload();
    }


    render() {
        const inputs = [
            <label>
                <p>
                    Name:
                    <input
                        value={this.state.name}
                        onChange={this.onChangeName}/>
                </p>
            </label>,
            <label>
                <p>
                    Network Resources:
                    <input
                        value={this.state.networkResources}
                        onChange={this.onChangeResources}/>
                </p>
            </label>

        ];

        const dialogId = "createNacRole";

        return (
            <div>
                <a href={"#" + dialogId}>Create Nac Role</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Create Nac Role</h2>
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