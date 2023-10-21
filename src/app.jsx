import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import TheWork from './TheWork';
import TheMan from './TheMan';
import YouNeed from './YouNeed';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Landing} />
                <Route path="/work" component={TheWork} />
                <Route path="/need" component={YouNeed} />
                <Route path= "/man" component={TheMan} />
            </Switch>
        </Router>
    );
}

export default App;
