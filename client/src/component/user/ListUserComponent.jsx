import React, {Component} from 'react';
import ApiService from '../../service/ApiService';

class ListUserComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            message: null
        }
        this.reloadUserList = this.reloadUserList.bind(this);

    }
    componentDidMount(){ //component lifecycle hook
        this.reloadUserList();
    }
    reloadUserList(){
        ApiService.fetchUsers()
        .then((res) => {
            this.setState({users: res.data})
        });
    }

   render() {
        return (
            <div>
                <h2 className="text-center">List of Users</h2>
                <button className="btn btn-success" style={{width:'100px'}} onClick={() => this.addUser()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Username</th>
                            <th>Password</th>
                            {/* <th>LastName</th>
                            <th>UserName</th>
                            <th>Age</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        {/* <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.age}</td> */}
                                        {/* <td>
                                       <pre><button className="btn btn-success" onClick={() => this.editUser(user.id)} style={{marginLeft: '10px'}}> Edit</button>
                                       <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button></pre>
                                        </td> */}
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListUserComponent;