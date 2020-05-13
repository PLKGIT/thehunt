/*  Axios  */
import axios from "axios";

/*  APP URL  */
const API_URL = "https://unlock-it.herokuapp.com/";

/*  Create DataService  */
class DataService {
    createOrg(org_name, org_city, org_state) {
        return axios.post(API_URL + "/api/createorg", {
            org_name,
            org_city,
            org_state
        }).then(res => {
            console.log("----Create Org----")
            console.log(res.data);
            return res.data;
        });
    }

    removeOrg(id) {
        return axios.delete(API_URL + "api/removeorg/" + id,  {
        }).then(res => {
            console.log("----Remove Org----")
            console.log(res.data);
            return res.data;
        });
    }
    updateOrg(id, org_name, org_city, org_state) {
        console.log("---update org---")
        console.log(id)
        console.log(org_name)
        console.log(org_city)
        console.log(org_state)
        return axios.put(API_URL + "api/updateorg/" + id, {
            org_name: org_name, org_city: org_city, org_state: org_state
        }).then(res => {
            console.log("----Update Org----")
            console.log(res.data);
            return res.data;
        });
    }
    getOrgDetails() {
        return axios.get(API_URL + 'dborg')
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }

    getHuntDetails() {
        return axios.get(API_URL + 'dbhunt')
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }
    getUserDetails() {
        return axios.get(API_URL + 'dbusers')
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }

    getUserDelete(id) {
        return axios.post(API_URL + 'userremove' + id)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }

    getUserUpdate(id) {
        return axios.post(API_URL + 'userupdate' + id)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }

}
/*  Export DataService  */
export default new DataService();