import axios from 'axios';

class ApiService {

    fetchUsers(){
        return axios.get(USER_API_BASE_URL);
    }
}

export default new ApiService();