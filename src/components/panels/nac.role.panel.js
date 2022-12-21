import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import NacRoleBoard from "../nac-role/nac.role.board";
import AuthService from "../../services/auth.service";

export default class NacRolePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            users: {}
        };
    }

    async componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({redirect: "/login"});
        this.setState({currentUser: currentUser, userReady: true})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div>
                        <p>
                            <NacRoleBoard/>
                        </p>
                    </div> : null}
            </div>
        );
    }
}