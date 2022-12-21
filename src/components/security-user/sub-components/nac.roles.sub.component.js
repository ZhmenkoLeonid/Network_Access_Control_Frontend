import React from "react";

export default class NacRolesSubComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <tr>
                {this.props.nacRoles
                    .sort((a, b) => a.id > b.id ? 1 : -1)
                    .map(role =>
                        <td>
                            <line>ID: {role.id}; Role name: {role.name}</line>
                        </td>
                    )}
            </tr>
        )
    }
}