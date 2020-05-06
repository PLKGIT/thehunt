/*  Axios  */
import axios from 'axios';

/*  Create Authorization Token  */
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.common["Authorization"];
    }
};

/*  Export Authorization Token  */
export default setAuthToken;