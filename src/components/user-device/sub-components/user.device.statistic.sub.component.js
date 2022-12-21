import React from "react";

export default class UserDeviceStatisticSubComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceStats: {}
        };
    }

    async componentDidMount() {
        this.setState({deviceStats: this.props.deviceStats});
    }

    render() {
        let mapArr = ""
        if (this.state.deviceStats.uniqueDestinationPortsProtocolsCountMap) {
            mapArr = Object.entries(this.state.deviceStats.uniqueDestinationPortsProtocolsCountMap)
                .map(([key, value]) => <li>Протокол {key}: {value}</li>);
        }
        return ( this.state.deviceStats ?
                <p>
                    <li> Среднее количество пакетов за всё время: {this.state.deviceStats.meanPacketCount}</li>
                    <li> Среднее количество пакетов за последний период: {this.state.deviceStats.meanLastPeriodPacketCount}</li>
                    <li> Период в миллисекундах: {this.state.deviceStats.periodMillis}</li>
                    <h6> Количество обращений к уникальным портам: </h6>
                    {mapArr}
                </p> : "UNDEFINED"
        );
    }
}