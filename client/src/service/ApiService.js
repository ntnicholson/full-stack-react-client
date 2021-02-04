import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/user'

class ApiService {

    fetchUsers(){
        return axios.get(USER_API_BASE_URL);
    }
}

export default new ApiService();