import axios from 'axios';
import authHeader from './auth-header';
import * as https from "https";

const REMOTE_NETWORK_RESOURCES_API_URL = 'https://localhost/network-resource/';

class NetworkResourceService {
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

    async getResources() {
        return await this.instance.get(REMOTE_NETWORK_RESOURCES_API_URL);
    }

    deleteResource(networkResource) {
        this.instance.delete(REMOTE_NETWORK_RESOURCES_API_URL + networkResource.port)
            .then(response => {
                if (response.status.code === 401) {
                    alert('ACCESS DENIED: You are not authorized to delete resource with port: ' +
                        networkResource.port);
                }
            });
    }

    updateResource(networkResource) {
        this.instance.put(REMOTE_NETWORK_RESOURCES_API_URL, networkResource).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update resource with port: ' +
                    networkResource.port);
            }
        });
    }

    createResources(networkResources) {
        this.instance.post(REMOTE_NETWORK_RESOURCES_API_URL, networkResources).then(response => {
            if (response.status.code === 401) {
                alert('ACCESS DENIED: You are not authorized to update resources');
            }
        });
    }
}

export default new NetworkResourceService();