import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

    //Login
    login(username, password){
        return axios.post(API_URL + "signin",{username, password})
            .then(response => {
                if (response.data.token){
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data;
            });
    }

    //Logout
    logout(){
        localStorage.removeItem("user");
    }

    //Register
    register(username, email, password){
        return axios.post(API_URL + "signup", {
            username, email, password
        });
    }
    //Get stored user info + jwt
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}
export default new AuthService();