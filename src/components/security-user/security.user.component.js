import React from "react";
import SecurityUserUpdateDialog from "./dialogs/security.user.update.dialog";
import SecurityRolesSubComponent from "./sub-components/security.roles.sub.component";
import NacRolesSubComponent from "./sub-components/nac.roles.sub.component";
import UsersDevicesSubComponent from "./sub-components/users.devices.sub.component";

export default class SecurityUserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.user);
    }

    handleUpdate() {
        this.props.onUpdate(this);
    }


    render() {
        const securityRoles = <SecurityRolesSubComponent securityRoles={this.props.user.securityRoles}/>;
        const nacRoles = <NacRolesSubComponent nacRoles={this.props.user.nacRoles}/>
        const nacUsers = <UsersDevicesSubComponent nacUsers={this.props.user.nacUsers}/>
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td>{securityRoles}</td>
                <td>{nacRoles}</td>
                <td>{nacUsers}</td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
                <td>
                    <SecurityUserUpdateDialog user={this.props.user}
                                  onUpdate={this.props.onUpdate}/>
                </td>
            </tr>
        )
    }
}