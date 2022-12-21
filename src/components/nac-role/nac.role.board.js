import React from 'react';
import NacRoleService from "../../services/nac.role.service";
import NacRoleListComponent from "./nac.role.list.component";

class NacRoleBoard extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            nacRoles: [],
        }
    }

    async componentDidMount() {
        await NacRoleService.getRoles().then((response) => {
            this.setState({
                nacRoles: response.data.roles
            });
        });
    }

    onDelete(role) {
        NacRoleService.deleteRole(role);
    }

    onUpdate(role) {
        NacRoleService.updateRole(role);
    }

    onCreate(role) {
        NacRoleService.createRoles(role);
    }

    render() {
        return (<NacRoleListComponent nacRoles={this.state.nacRoles}
                                      onDelete={this.onDelete}
                                      onUpdate={this.onUpdate}
                                      onCreate={this.onCreate}
        />);
    }
}

export default NacRoleBoard;