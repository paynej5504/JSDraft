//import statements
import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';





function chartData() {
  return {
    //months
    labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
    
    datasets: [
      {
        label: 'Positive',
        pointBackgroundColor: 'blue',
        borderColor: 'blue',
        //end of month total
        data: [2199, 18027, 35513, 51789, 91159, 123157, 153987, 215697, 421063],
      },
      {
        label: 'Deaths',
        pointBackgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,0.5)',
        //end of month total
        data: [55, 975, 2155, 2863, 3489, 4138, 4804, 5301, 6429],
      },
      {
        label: 'Recovered',
        strokeColor: 'rgba(151,187,205,1)',
        pointBackgroundColor: 'green',
        borderColor: 'mediumSeaGreen',
        //end of month total
        data: [0, 0, 0, 0, 65788, 102631, 132980, 168884, 271326],
      },
    ]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  responsive: true,
  /*legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',*/
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px',
    display: 'flex',
    width: '80vw',
    height: 'auto',
    overflow: 'hidden',
    margin: '0',
    position: 'relative'
  }
  
}

class LineChartExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        
        <LineChart data={this.state.data}
          options={options}
          width={600} height={350}/>
          
      </div>
    )
  }
}

export default LineChartExample;