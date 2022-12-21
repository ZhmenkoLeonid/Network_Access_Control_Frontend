import React from "react";

export default class NacRoleUpdateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            name: this.props.nacRole.name,
            networkResources: this.props.nacRole.networkResources
                .map(e => e.port)
                .sort((a,b) => a > b ? 1 : -1)
                .toString()
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNetworkResources = this.onChangeNetworkResources.bind(this);
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeNetworkResources(e) {
        //if (e.target.value.split(',').isArray) {
            this.setState({
                networkResources: e.target.value
            });
        //}
    }

    handleSubmit(e) {
        e.preventDefault();
        let networkResources = this.state.networkResources.split(',');
        const updatedNacRole = {
            id: this.props.nacRole.id,
            name: this.state.name,
            networkResources: networkResources
        }
        const roles = Array.of(updatedNacRole);
        this.props.onUpdate('{"roles":' + JSON.stringify(roles) + '}');
        window.location = "#";
        window.location.reload();
    }

    render() {
        /*        const inputs = this.props.attributes.map(attribute =>
                    <p key={this.props.user.entity[attribute]}>
                        <input type="text" placeholder={attribute}
                               defaultValue={this.props.user.entity[attribute]}
                               ref={attribute} className="field"/>
                    </p>
                )*/

        const inputs = [
            <label>
                <p key={this.props.nacRole.name}>
                    name:
                    <input
                        value={this.state.name}
                        onChange={this.onChangeName}/>
                </p>
            </label>,
            <label>
                <p key={this.props.nacRole.networkResources}>
                    Ports:
                    <input
                        value={this.state.networkResources}
                        onChange={this.onChangeNetworkResources}/>
                </p>
            </label>
            /*,
            <label>
                <p key={this.props.user.ports}>
                    Ports:
                    <input
                        value={this.state.ports}
                        onChange={this.onChangePorts}/>
                </p>
            </label>,
            <label>
                Blacklisted:
                <input type="checkbox"
                       onChange={this.onChangeBlacklisted}
                       defaultChecked={this.state.blacklisted}>
                </input>

            </label>*/
        ];

        const dialogId = "updateNacRole-" + this.props.nacRole.id;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Update a nac role</h2>
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