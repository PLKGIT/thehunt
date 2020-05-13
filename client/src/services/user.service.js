/*  Axios  */
import axios from 'axios';

/*  authHeader  */
import authHeader from './auth-header';

/*  App URL with Landing Page  */
const API_URL = "https://unlock-it.herokuapp.com/api/land/";

/*  Create UserService  */
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getTeacherBoard() {
    return axios.get(API_URL + 'teacher', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

/*  Export UserService  */
export default new UserService();