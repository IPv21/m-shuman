import React from 'react';
import { BrowserRouter as Router, Route, Outlet,  } from 'react-router-dom';
import Landing from './pages/Landing';
import TheWork from './pages/TheWork';
import TheMan from './pages/TheMan';
import TheCall from './pages/TheCall';



function App() {
    return <Outlet />;
}

export default App;
