import axios from 'axios';
import authHeader from './auth-header';

const USER_API_BASE_URL = 'http://localhost:8080/user'

class ApiService {

    fetchUsers(){
        return axios.get(USER_API_BASE_URL, { headers: authHeader() });
    }
}

export default new ApiService();