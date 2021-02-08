import axios from 'axios';

const CONTACT_API_BASE_URL = 'http://localhost:8080/contact-us'

class ApiService {

    sendMessage(message){
        return axios.post(CONTACT_API_BASE_URL + "/send", message);
    }
}

export default new ApiService();