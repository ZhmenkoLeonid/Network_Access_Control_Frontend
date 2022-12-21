import axios from 'axios';
import authHeader from './auth-header';
import * as https from "https";

const REMOTE_SECURITY_USER_API_URL = 'https://localhost/security-user/';
const REMOTE_AUTH_SECURITY_USER_API_URL = 'https://localhost/api/auth/';

class SecurityUserService {
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

    async getUsers() {
        return await this.instance.get(REMOTE_SECURITY_USER_API_URL);
    }

    deleteUser(user) {
        this.instance.delete(REMOTE_SECURITY_USER_API_URL + user.id)
            .then(response => {
                if (response.status.code === 401) {
                    alert('ACCESS DENIED: You are not authorized to delete ' +
                        user.macAddress);
                }
            });
    }

    updateUser(user) {
        this.instance.put(REMOTE_SECURITY_USER_API_URL, user).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update ' +
                    user.macAddress);
            }
        });
    }

    createUser(user) {
        this.instance.post(REMOTE_AUTH_SECURITY_USER_API_URL + "register", user).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update ' +
                    user.macAddress);
            }
        });
    }
}

export default new SecurityUserService();
