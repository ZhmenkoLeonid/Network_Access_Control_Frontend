import React from "react";
import NetworkResourceComponent from "./network.resource.component";
import NetworkResourceCreateDialogComponent from "./dialogs/network.resource.create.dialog.component";

export default class NetworkResourceListComponent extends React.Component {
    render() {
        const networkResources = this.props.networkResources
            .sort((a, b) => a.port > b.port ? 1 : -1)
            .map(resource =>
                <NetworkResourceComponent networkResource={resource}
                                          onDelete={this.props.onDelete}
                                          onUpdate={this.props.onUpdate}
                />
            );

        return (
            <div>
                <th>
                <NetworkResourceCreateDialogComponent onCreate={this.props.onCreate}/>
                </th>
                <table>
                    <tbody>
                    <tr>
                        <th>Порт</th>
                        <th>Имя</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {networkResources}
                    </tbody>
                </table>
            </div>
        )
    }
}