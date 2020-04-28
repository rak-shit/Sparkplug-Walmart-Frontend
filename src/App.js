import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import FormData from './components/FormData'
import Charts from './components/Charts'

const axios = require('axios')

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        item: '',
        country: '',
        year: '',
        submit: false,
        data_raw: [],
        data_outliers: [],
        data_median: [],
        loader: false,
        outliers: new Array(),
        avg_rate_change: 0
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ 
      loader: true,
      submit: false 
    })
    axios.get(`http://localhost:5000/monitor/${this.state.item}/${this.state.year}/${this.state.country}`).then((response) => {
      const data_raw = response.data.raw_data.map((tuple) => ({
        x: tuple[0],
        y: tuple[1]
      }))
      const data_outliers = response.data.outliers.map((tuple) => ({
        x: tuple[0],
        y: tuple[1]
      }))
      const data_median = response.data.threshold_all.map((tuple) => ({
        x: tuple[0],
        y: tuple[1]
      }))
      var outliers = new Array()
      response.data.outliers.map((tuple) => {
        outliers[tuple[0]] = tuple[2]
      })
      const avg_rate_change = response.data.average_rate_change.toFixed(2)*100
      this.setState({
        data_raw: data_raw,
        data_outliers: data_outliers,
        data_median: data_median,
        submit: true,
        loader: false,
        outliers: outliers,
        avg_rate_change: avg_rate_change
      })
    });
  }


  
  render() {
    return (
      <div className="App">
        <Dashboard />
        <div>
          <FormData onClick={this.handleClick} onChange={this.handleChange}/>
        </div>
        <div>
          <Charts data_raw={this.state.data_raw} data_outliers={this.state.data_outliers} 
            data_median={this.state.data_median} submit={this.state.submit} loader={this.state.loader} 
            outliers={this.state.outliers} avg_rate_change={this.state.avg_rate_change} item={this.state.item} />
        </div>
      </div>
    )
  }
}

export default App


