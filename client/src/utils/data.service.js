import axios from "axios";

const API_URL = "https://unlock-it.herokuapp.com/";

class DataService {
    createHunt(teacher_id, title, category,image_url,description,hunt_data) {
        console.log("----Prior to Axios----")
        console.log(teacher_id)
        console.log(title)
        console.log(category)
        console.log(image_url)
        console.log(description)
        console.log(hunt_data)

        return axios.post(API_URL + "api/createhunt", {
            teacher_id,
            title,
            category,
            image_url,
            description,
            hunt_data
        }).then(res => {
            console.log("----Create Hunt----")
            console.log(res.data);
            return res.data;
        });
    }

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
export default new DataService();