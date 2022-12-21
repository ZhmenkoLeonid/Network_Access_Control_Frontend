import React from 'react';
import SecurityUserService from "../../services/security.user.service";
import SecurityUserListComponent from "./security.user.list.component";

export default class SecurityUserBoard extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            users: [],
        }
    }

    async componentDidMount() {
        await SecurityUserService.getUsers().then((response) => {
            this.setState({
                users: response.data.securityUsersList
            });
        });
    }

    onDelete(user) {
        SecurityUserService.deleteUser(user);
    }

    onUpdate(user) {
        SecurityUserService.updateUser(user);
    }

    onCreate(user) {
        SecurityUserService.createUser(user);
    }

    render() {
        return (<SecurityUserListComponent users={this.state.users}
                                           onDelete={this.onDelete}
                                           onUpdate={this.onUpdate}
                                           onCreate={this.onCreate}
        />);
    }
}