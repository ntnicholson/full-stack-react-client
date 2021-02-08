import React, {Component} from 'react';
import ContactService from '../../service/ContactService';

class LeaveMessageComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            subject: '',
            body: '', 
            message: null
        }
    }
    sendMessage = (e) =>
{
 e.preventDefault();
 let message = {name: this.state.name, email: this.state.email, subject: this.state.subject, body: this.state.body}
 ContactService.sendMessage(message)
 .then(res => {this.setState({message: 'Thank you for your message.'});
this.props.history.push('/contact-form');
})
 
}    
onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        return(
            <div>
                <h2>Leave a Message</h2>
                <form>
                    <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Email:</label>
                    <input type="placeholder" placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" placeholder="Topic" name="subject" className="form-control" value={this.state.subject} onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                    <label>Body:</label>
                    <input type="text-area" placeholder="Leave a Message" name="body" className="form-control" value={this.state.body} onChange={this.onChange} required/>
                    </div>
                    <br/>
                    <button className="btn btn-success" onClick={this.sendMessage}>Send</button>
                </form>
            </div>)}
}

export default LeaveMessageComponent