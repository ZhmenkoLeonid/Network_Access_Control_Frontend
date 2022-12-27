import React from "react";

export default class UserDeviceAlertsSubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    function
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    render() {
        console.log(this.props.alerts);
        let roles = this.props.alerts
            .map(alert => alert.alertMessage)
            .filter(this.onlyUnique)
            .map(alert =>
                <li>{alert}</li>
            );
        console.log(roles);
        return (
            <p>
                {roles}
            </p>
        )
    }
}