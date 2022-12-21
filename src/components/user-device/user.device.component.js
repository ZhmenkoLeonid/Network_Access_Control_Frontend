import React from "react";
import UserDeviceStatisticSubComponent from "./sub-components/user.device.statistic.sub.component";
import UserDeviceBlockInfoSubComponent from "./sub-components/user.device.blockinfo.sub.component";
import UserDeviceAlertsSubComponent from "./sub-components/user.device.alerts.sub.component";
import UserDeviceUpdateDialog from "./dialogs/user.device.update.dialog.component";
import CountdownTimer from "../util/countdown.timer.component";

export default class UserDeviceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.device);
    }

    handleUpdate() {
        this.props.onUpdate(this);
    }


    render() {
        const deviceStatistic = <UserDeviceStatisticSubComponent deviceStats={this.props.device.deviceStatistic}/>
        const deviceBlockInfo = <UserDeviceBlockInfoSubComponent blackListInfo={this.props.device.blackListInfo}/>
        let timeLeftSeconds = 0;
        let timerSeconds;
        if (this.props.device.endSessionTimeMillis != null
            && (timerSeconds = (this.props.device.endSessionTimeMillis - Date.now()) / 1000) > 0) {
            console.log(Date.now());
            timeLeftSeconds = timerSeconds;
        }
        const sessionTimer = <CountdownTimer seconds={timeLeftSeconds}/>;
        const alerts = <UserDeviceAlertsSubComponent alerts={this.props.device.alerts}/>
        //console.log(this.props.user);
        return (
            <tr>
                <td>{this.props.device.macAddress}</td>
                <td>{this.props.device.hostname}</td>
                <td>{this.props.device.ipAddress}</td>
                <td>{deviceStatistic}</td>
                <td>{deviceBlockInfo}</td>
                <td>{alerts}</td>
                <td>{sessionTimer}</td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
                <td>
                    <UserDeviceUpdateDialog device={this.props.device}
                                            onUpdate={this.props.onUpdate}/>
                </td>
            </tr>
        )
    }
}