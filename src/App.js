import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import FormData from './components/FormData'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <div>
        <FormData />
      </div>
    </div>
  );
}

export default App;
