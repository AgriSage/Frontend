import http from "../../shared/services/http-base.service";


export class AuthApiService {
    constructor() {
        this.http = http;
        this.baseUrl = "/users";
    }


    login(email, password) {
        return http.get(`${this.baseUrl}?{email=${email}&password=${password}`);
    }

    register(user) {
        return http.post(`${this.baseUrl}`, user);
    }

}
