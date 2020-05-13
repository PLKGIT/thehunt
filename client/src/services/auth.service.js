/*  Axios  */
import axios from "axios";

/*  App URL  */
const API_URL = "https://unlock-it.herokuapp.com/api/auth/";

/*  Create AuthService  */
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'signin', {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username, first_name, last_name, email, password, status) {
    return axios.post(API_URL + "signup", {
      username, 
      first_name, 
      last_name, 
      email, 
      password,
      status
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

/*  Export AuthService  */
export default new AuthService();