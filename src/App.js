import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from '../src/components/Main'
import Update from '../src/components/Update'
import Display from '../src/components/Display'

function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Display} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default BasicExample;

