import React from "react";

export default class UserDeviceAlertsSubComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let roles = this.props.alerts.map(alert =>
            <li>{alert.alertMessage}</li>
        );
        return (
            <p>
                {roles}
            </p>
        )
    }
}