import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import AuthService from "../../services/auth.service";
import SecurityUserBoard from "../security-user/security.user.board";

export default class SecurityUserPanel extends Component {
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
                            <SecurityUserBoard/>
                        </p>
                    </div> : null}
            </div>
        );
    }
}
