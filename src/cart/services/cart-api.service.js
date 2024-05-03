import http from "../../shared/services/http-base.service";

export class CartApiService {
	constructor() {
		this.http = http;
		this.baseUrl = "/cart";
	}

	getAll() {
		return http.get(this.baseUrl);
	}

	getById(id) {
		return http.get(`${this.baseUrl}/${id}`);
	}

	create(id, cart) {
		return http.post(`${this.baseUrl}/${id}`, cart);
	}

	update(id, cart) {
		return http.put(`${this.baseUrl}/${id}`, cart);
	}
}
