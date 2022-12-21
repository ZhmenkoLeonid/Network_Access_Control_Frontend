import React from 'react';
import UserDeviceService from "../../services/user.device.service";
import UserDeviceListComponent from "./user.device.list.component";

class UserDeviceBoard extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            devices: [],
        }
    }

    async componentDidMount() {
        await UserDeviceService.getDevices().then((response) => {
            this.setState({
                devices: response.data.devices
            });
        });
    }

    onDelete(device) {
        UserDeviceService.deleteDevice(device);
    }

    onUpdate(device) {
        UserDeviceService.updateDevice(device);
    }

    render() {
        return (<UserDeviceListComponent devices={this.state.devices}
                                         onDelete={this.onDelete}
                                         onUpdate={this.onUpdate}
        />);
    }
}

export default UserDeviceBoard