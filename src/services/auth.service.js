import axios from "axios";
import * as https from "https";
const API_URL = "https://localhost/api/auth/";

class AuthService {
  login(username, password) {
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    return axios
      .post(API_URL + "signin", {
        username,
        password
      },{httpsAgent: agent})
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
