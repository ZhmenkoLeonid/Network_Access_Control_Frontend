import React from "react";

export default class NetworkResourceUpdateDialogComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            name: this.props.networkResource.name
        }
        this.onChangeName = this.onChangeName.bind(this);
        /*        this.onChangePorts = this.onChangePorts.bind(this);
                this.onChangeBlacklisted = this.onChangeBlacklisted.bind(this);*/
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //const portsArr = this.state.ports.split(',');
        const updatedNetworkResource = {
            port: this.props.networkResource.port,
            name: this.state.name
        }
        this.props.onUpdate(JSON.stringify(updatedNetworkResource));
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
                <p key={this.props.networkResource.name}>
                    name:
                    <input
                        value={this.state.name}
                        onChange={this.onChangeName}/>
                </p>
            </label>/*,
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

        const dialogId = "updateNetworkResource-" + this.props.networkResource.port;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Update A Network Resource</h2>
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