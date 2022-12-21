import React from "react";
import NacRoleComponent from "./nac.role.component";
import NacRoleCreateDialog from "./dialogs/nac.role.create.dialog";

export default class NacRoleListComponent extends React.Component {
    render() {
        const nacRoles = this.props.nacRoles
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map(role =>
                <NacRoleComponent nacRole={role}
                                          onDelete={this.props.onDelete}
                                          onUpdate={this.props.onUpdate}
                />
            );

        return (
            <div>
                <th>
                    <NacRoleCreateDialog onCreate={this.props.onCreate}/>
                </th>
                <table>
                    <tbody>
                    <tr>
                        <th>ИД</th>
                        <th>Имя</th>
                        <th>Сетевые ресурсы</th>
                    </tr>
                    {nacRoles}
                    </tbody>
                </table>
            </div>
        )
    }
}