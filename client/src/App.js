import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import LeaveMessageComponent from "./component/contactform/LeaveMessageComponent";
import BoardUser from './component/login/Board-User.Component';
//
import Home from "./component/login/Home.Component";
import Login from "./component/login/LoginComponent";
import Register from "./component/login/RegisterComponent";
import Profile from "./component/login/Profile.Component";
import ListProductComponent from './component/shop/ListProductComponent';
//Admin
import CreateProductComponent from './component/admin/CreateProductComponent';

function App() {
  return (
    <div className="container">
    <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Music Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shop">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="/admin-only">Admin Only</a>
          </li>
        </ul>
           <ul className="navbar-nav navbar-right">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>  
  <br/> <br/>  <br/>
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/shop" exact component={ListProductComponent}></Route>
        <Route exact path="/contact-us" exact component={LeaveMessageComponent}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/profile" exact component={Profile}></Route>
        
        <Route path="/admin-only" exact component={ListUserComponent}></Route>
        <Route path="/admin-product" exact component={CreateProductComponent}></Route>
      </Switch>
      
    </div>
    </Router>
    </div>
  );
}

export default App;
