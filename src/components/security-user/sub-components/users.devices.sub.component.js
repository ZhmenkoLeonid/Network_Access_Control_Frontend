import React from "react";

export default class UsersDevicesSubComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let nacUsers = this.props.nacUsers.map(user =>
            <li>Hostname: {user.hostname}; Mac Address: {user.macAddress}</li>
        );
        return (
            <p>
                {nacUsers}
            </p>
        )
    }
}