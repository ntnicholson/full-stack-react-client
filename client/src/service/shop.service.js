import axios from 'axios';

const SHOP_API_BASE_URL = 'http://localhost:8080/shop'

class ProductService {

    fetchProducts(){
        return axios.get(SHOP_API_BASE_URL);
    }
}

export default new ProductService();