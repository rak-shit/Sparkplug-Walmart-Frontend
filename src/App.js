import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import FormData from './components/FormData'
import Charts from './components/Charts'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <div>
        <FormData />
      </div>
      <div>
        <Charts />
      </div>
    </div>
  );
}

export default App;
