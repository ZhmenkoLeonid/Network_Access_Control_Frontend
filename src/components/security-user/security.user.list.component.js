import React from "react";
import SecurityUserComponent from "./security.user.component";
import SecurityUserCreateDialog from "./dialogs/security.user.create.dialog";

export default class SecurityUserListComponent extends React.Component {
    render() {
        const users = this.props.users.map(user =>
            <SecurityUserComponent user={user}
                              onDelete={this.props.onDelete}
                              onUpdate={this.props.onUpdate}
            />
        );

        return (
            <div>
                <th>
                    <SecurityUserCreateDialog onCreate={this.props.onCreate}/>
                </th>
                <table>
                    <tbody>
                    <tr>
                        <th>UUID</th>
                        <th>Имя клиента</th>
                        <th>Security Роли</th>
                        <th>Nac Роли</th>
                        <th>Устройства</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {users}
                    </tbody>
                </table>
            </div>
        )
    }
}