  
import React from "react";
import {BrowserRouter as Router, Link,Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <div className = "App">
      <Router>
     <Switch>
       <Route exact path="/" component={Home} /> 
       <Route path="/Pizza" component={Form} />
    </Switch>
    </Router>
     
   </div>

  
  
  );
};
export default App;