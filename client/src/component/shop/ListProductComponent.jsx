import React, {Component} from 'react';
import ProductService from '../../service/shop.service';

class ListProductComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
            message: null
        }
        this.reloadProductList = this.reloadProductList.bind(this);

    }
    componentDidMount(){ //component lifecycle hook
        this.reloadProductList();
    }
    reloadProductList(){
        ProductService.fetchProducts()
        .then((res) => {
            this.setState({products: res.data})
        });
    }

   render() {
       return (
            <div class="container">
                <div class="row">
			        <div class="form-group">
				        <form class="form" method="" action="#">
					        <div class="input-group mb-3">
						        <input type="text" class="form-control" placeholder="Search.."
							name="query" id="searchString"/>
						    <div class="input-group-append">
							    <button class="btn btn-dark btn-lg form-control">
								<i class="material-icons"> search </i>
							    </button>
						    </div>
					    </div>
				</form>
			</div>
			<br />
		</div>
		<br />
		<div className="row row-cols-1 row-cols-md-3 g-4">
               
                { this.state.products.map(
                    product =>
                    <div id="card-spacing">
                    <div className="card"><img class="card-img-top" src={product.imageLink} alt="https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg" onClick></img>
                        <div className="card-body">
					    <h4 className="card-title">{product.name}</h4>
					    <h6 className="card-subtitle mb-2"> Category: {product.category}</h6>
					    <h6 className="card-subtitle mb-2 text-muted"> $ {product.price}</h6>
					</div>
                    </div>
                    </div>
                )
                    }
		
        </div>
        </div>
        );
    }
}
//
export default ListProductComponent;