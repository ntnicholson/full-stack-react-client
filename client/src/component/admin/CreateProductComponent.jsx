import React, {Component} from 'react';
import AdminProductService from '../../service/admin.service';

class CreateProductComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            condition: '',
            description: '',
            price: '', 
            imageLink: '', 
            category: '', 
            message: null
        }
    }
    saveProduct = (e) =>
{
 e.preventDefault();
 let product = {name: this.state.name, condition: this.state.condition, description: this.state.description, 
    price: this.state.price, category: this.state.category, imageLink: this.state.imageLink,} 
 AdminProductService.createProduct(product)
 .then(res => {this.setState({message: 'Thank you for your message.'});
this.props.history.push('/shop');
})
 
}    
onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        return(
            <div>
                <h2>Create a Product</h2>
                <form>
                    <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Condition:</label>
                    <input type="text" placeholder="Condition of product" name="condition" className="form-control" value={this.state.email} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Description:</label>
                    <input type="text" placeholder="About the product" name="description" className="form-control" value={this.state.subject} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Price:</label>
                    <input type="number" placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Image Hyperlink:</label>
                    <input type="text" placeholder="" name="imageLink" className="form-control" value={this.state.imageLink} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Category:</label>
                    <input type="text" placeholder="Category" name="category" className="form-control" value={this.state.category} onChange={this.onChange} required/>
                    </div><br/>
                    <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                </form>
            </div>)}
}

export default CreateProductComponent