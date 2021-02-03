import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListUserComponent from "./component/user/ListUserComponent";

function App() {
  return (
    <div className="container">
    <Router>
    <div>
      <h1>React User Application</h1>
      <Switch>
        <Route path="/" exact component={ListUserComponent}></Route>
      </Switch>
    </div>

    </Router>
    </div>
  );
}

export default App;
