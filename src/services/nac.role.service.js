import axios from 'axios';
import authHeader from './auth-header';
import * as https from "https";

const REMOTE_NAC_ROLE_API_URL = 'https://localhost/nac-role/';

class NacRoleService {
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

    async getRoles() {
        return await this.instance.get(REMOTE_NAC_ROLE_API_URL);
    }

    deleteRole(role) {
        this.instance.delete(REMOTE_NAC_ROLE_API_URL + role.name)
            .then(response => {
                if (response.status.code === 401) {
                    alert('ACCESS DENIED: You are not authorized to delete resource with port: ' +
                        role.id);
                }
            });
    }

    updateRole(role) {
        this.instance.put(REMOTE_NAC_ROLE_API_URL, role).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update resource with port: ' +
                    role.id);
            }
        });
    }

    createRoles(roles) {
        this.instance.post(REMOTE_NAC_ROLE_API_URL, roles).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update resources');
            }
        });
    }
}

export default new NacRoleService();