import './reports.css'
import * as React from 'react'

export default function Reports() {
  
  const [report, setReport] = React.useState('report');

  const options = [
    {label: 'Blah', value: 'blah'},
  ];

  const handleReportChange = (event) => {
    setReport(event.target.value);
  }

  return (
    <div className="reportsContainer">
      <div className="reportsHeader">
        <h1>Reports</h1>
      </div> 
      <div className="reports">
        <div className="reportsFilter"></div>
        <div className="reportsGraph"></div>
      </div>
    </div>
  )
}
