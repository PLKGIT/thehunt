import axios from "axios";

const API_URL = "https://unlock-it.herokuapp.com/api/auth/";

class DataService {
    createorg(org_name, org_city, org_state) {
        return axios.post(API_URL + "/api/createorg", {
            org_name,
            org_city,
            org_state
        });
    }
    getOrgDetails() {
        return axios.get(API_URL + 'dborg')
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }
}
export default new DataService();