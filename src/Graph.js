import React from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          chartData: {},
        }
      }
    
      componentDidMount() {
    
         axios('https://api.myjson.com/bins/8mw98')
          .then((response) => {
     
            const { crimes } = response.data;
            const chartData = {
              labels: crimes.map(k => k.datetime),
              datasets: [
                {
                  label: 'brottshändelser',
                  data: crimes.map(d => d.count),
                  backgroundColor: 'rgba(75,192,192,1)',
                }
              ]
            }
    
            this.setState({ chartData });
          });
      }
     
  render() {
    return (
      <div> 
              <div className="App">
      <Bar data={this.state.chartData} options={this.state.chartOptions} width={this.state.width} height={this.state.height}  />
    </div>
  </div>
      
    );
  }
}