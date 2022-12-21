import React from "react";
import UserDeviceComponent from "./user.device.component";

export default class UserDeviceListComponent extends React.Component {
    render() {
        const devices = this.props.devices.map(device =>
            <UserDeviceComponent device={device}
                                 onDelete={this.props.onDelete}
                                 onUpdate={this.props.onUpdate}
            />
        );

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>MAC адрес</th>
                        <th>Имя устройства</th>
                        <th>Последний IP адрес</th>
                        <th>Статистика</th>
                        <th>Информация о блокировке</th>
                        <th>Предупреждения</th>
                        <th>Время до окончания сессии</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {devices}
                    </tbody>
                </table>
            </div>
        )
    }
}