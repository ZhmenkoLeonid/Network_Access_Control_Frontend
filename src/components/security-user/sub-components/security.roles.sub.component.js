import React from "react";

export default class SecurityRolesSubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let roles = this.props.securityRoles.map(role =>
            <li>ID: {role.id}; Name: {role.name}</li>
        );
        return (
            <p>
                {roles}
            </p>
        )
    }
}