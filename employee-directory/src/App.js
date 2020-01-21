import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Employee from './components/pages/Employee'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Employee} />
      </div>
    </Router>
  );
}

export default App;
