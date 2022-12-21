import React from 'react';
import NetworkResourceService from "../../services/network.resource.service";
import NetworkResourceListComponent from "./network.resource.list.component";

export default class NetworkResourceBoard extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            networkResources: [],
        }
    }

    async componentDidMount() {
        await NetworkResourceService.getResources().then((response) => {
            this.setState({
                networkResources: response.data.resources
            });
        });
    }

    onDelete(resource) {
        NetworkResourceService.deleteResource(resource);
    }

    onUpdate(updatedResource) {
        NetworkResourceService.updateResource(updatedResource);
    }

    onCreate(resources) {
        NetworkResourceService.createResources(resources);
    }

    render() {
        return (<NetworkResourceListComponent networkResources={this.state.networkResources}
                                              onDelete={this.onDelete}
                                              onUpdate={this.onUpdate}
                                              onCreate={this.onCreate}
        />);
    }
}
