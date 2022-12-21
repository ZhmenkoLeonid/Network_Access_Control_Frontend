import React from "react";
import NetworkResourceUpdateDialogComponent from "./dialogs/network.resource.update.dialog.component";

export default class NetworkResourceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.networkResource);
        window.location = "#";
        window.location.reload();
    }

    handleUpdate(updatedNetworkResource) {
        this.props.onUpdate(updatedNetworkResource);
    }


    render() {
        return (
            <tr>
                <td>{this.props.networkResource.port}</td>
                <td>{this.props.networkResource.name}</td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
                <td>
                    <NetworkResourceUpdateDialogComponent networkResource={this.props.networkResource}
                                                          onUpdate={this.props.onUpdate}/>
                </td>
            </tr>
        )
    }
}