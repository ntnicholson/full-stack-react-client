import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/admin/product'

class AdminProductService {

    fetchProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    createProduct(product){
    return axios.post(PRODUCT_API_BASE_URL + "/create", product);
    }


}

export default new AdminProductService();