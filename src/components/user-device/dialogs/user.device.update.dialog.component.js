import React from "react";

export default class UserDeviceUpdateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: "",
            hostname: this.props.device.hostname,
            blocked: this.props.device.blackListInfo.blocked
        }
        this.onChangeHostname = this.onChangeHostname.bind(this);
        this.onChangeBlockedStatus = this.onChangeBlockedStatus.bind(this);
    }

    onChangeHostname(e) {
        this.setState({
            hostname: e.target.value
        });
    }

    onChangeBlockedStatus(e) {
        const {checked} = e.target;
        this.setState({
            blocked: checked
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const updatedDevice = {
            macAddress: this.props.device.macAddress,
            hostname: this.state.hostname,
            ipAddress: this.props.device.ipAddress,
            blocked: this.state.blocked
        }
        this.props.onUpdate(JSON.stringify(updatedDevice));
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
                <p key={this.props.device.hostname}>
                    Hostname:
                    <input
                        value={this.state.hostname}
                        onChange={this.onChangeHostname}/>
                </p>
            </label>,
            <label>
                Blocked status:
                <input type="checkbox"
                       onChange={this.onChangeBlockedStatus}
                       defaultChecked={this.state.blocked}>
                </input>

            </label>

        ];

        const dialogId = "updateDevice-" + this.props.device.macAddress;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href={"#"} title="Close" className="close">X</a>
                        <h2>Update a device</h2>
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