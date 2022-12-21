import React from "react";

export default class NetworkResourceCreateDialogComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            port: 0,
            name: "example name"
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
    }

    onChangePort(e) {
        this.setState({
            port: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const createNetworkResource = {
            port: this.state.port,
            name: this.state.name
        }
        const createNetworkResourceArray = Array.of(createNetworkResource);
        this.props.onCreate('{ "resources": ' + JSON.stringify(createNetworkResourceArray) + '}');
        window.location = "#";
        window.location.reload();
    }


    render() {
        const inputs = [
            <label>
                <p>
                    port:
                    <input
                        value={this.state.port}
                        onChange={this.onChangePort}/>
                </p>
            </label>,
            <label>
                <p>
                    name:
                    <input
                        value={this.state.name}
                        onChange={this.onChangeName}/>
                </p>
            </label>
        ];

        const dialogId = "createNetworkResource";

        return (
            <div>
                <a href={"#" + dialogId}>Create Network Resource</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Create A Network Resource</h2>
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