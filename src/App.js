import React from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Kamper from './Pages/Kamper';
import Result from './Pages/Result';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/kamper" component={Kamper}/>
                <Route path="/result" component={Result}/>
            </Switch>
        </Router>
    );
};

export default App;