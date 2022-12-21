import axios from 'axios';
import authHeader from './auth-header';
import * as https from "https";

const REMOTE_USER_DEVICE_API_URL = 'https://localhost/user-device/';
const REMOTE_NETFLOW_STATISTIC_API_URL = 'https://localhost/netflow-user-stat/';

class UserDeviceService {
    instance;

    constructor() {
        this.instance = axios.create({
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });

        this.instance.interceptors.request.use(function (config) {
            config.headers = authHeader();
            return config;
        });
    }

    async getDevices() {
        return await this.instance.get(REMOTE_USER_DEVICE_API_URL);
    }

    getDevicesStatistic() {
        return this.instance.get(REMOTE_NETFLOW_STATISTIC_API_URL);
    }

    async getDeviceStatistic(device) {
        return await this.instance.get(REMOTE_NETFLOW_STATISTIC_API_URL + device.macAddress);
    }

    deleteDevice(device) {
        this.instance.delete(REMOTE_USER_DEVICE_API_URL + device.macAddress)
            .then(response => {
                if (response.status.code === 401) {
                    alert('ACCESS DENIED: You are not authorized to delete ' +
                        device.macAddress);
                }
            });
    }

    updateDevice(device) {
        this.instance.put(REMOTE_USER_DEVICE_API_URL, device).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update ' +
                    device.macAddress);
            }
        });
    }
}

export default new UserDeviceService();
