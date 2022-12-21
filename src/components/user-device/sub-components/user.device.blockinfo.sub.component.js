import React from "react";

export default class UserDeviceBlockinfoSubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                <li>Заблокирован? {this.props.blackListInfo.blocked ? "Да" : "Нет"} </li>
                <li>
                    Время последней блокировки: {
                    this.props.blackListInfo.whenBlocked == null
                        ? 'UNDEFINED'
                        : this.props.blackListInfo.whenBlocked
                }
                </li>
                <li>
                    Время последней разблокировки: {
                    this.props.blackListInfo.whenUnblocked == null
                        ? 'UNDEFINED'
                        : this.props.blackListInfo.whenUnblocked
                }
                </li>
            </p>
        )
    }
}