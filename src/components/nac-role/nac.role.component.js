import React from "react";
import NacRoleUpdateDialog from "./dialogs/nac.role.update.dialog";

export default class NacRoleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.nacRole);
        window.location = "#";
        window.location.reload();
    }

    render() {
        const networkResources = this.props.nacRole.networkResources
            .sort((a, b) => a.port > b.port ? 1 : -1)
            .map((networkResource) => <li>Порт - {networkResource.port}; Имя - {networkResource.name}</li>)

        return (
            <tr>
                <td>{this.props.nacRole.id}</td>
                <td>{this.props.nacRole.name}</td>
                <td>
                    <p>
                        {networkResources}
                    </p>
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
                <td>
                    <NacRoleUpdateDialog nacRole={this.props.nacRole}
                                         onUpdate={this.props.onUpdate}/>
                </td>
            </tr>
        )
    }
}