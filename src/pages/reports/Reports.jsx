import './reports.css'
import { useState} from 'react'
import { Select, FormControl, MenuItem, InputLabel, Radio, RadioGroup, FormLabel, FormControlLabel } from '@mui/material'

export default function Reports() {
  
  const [report, setReport] = useState('report');
  const [dateType, setDateType] = useState('dateType');

  const options = ["Preset 1", "Preset 2", "Preset 3"];
  const dateTypeOptions = ["Days", "Months", "Years"];
  const locationOptions = ["Station 1", "Station 2", "Station 3"];

  const handleReportChange = (event) => {
    // Handle chart population here
    setReport(event.target.value);
  }

  return (
    <div className="reportsContainer">
      <div className="reportsHeader">
        <h1>Reports</h1>
        <FormControl fullWidth variant='outlined'>
          <InputLabel id="preset-select-label">Preset</InputLabel>
          <Select
            variant='outlined'
            value={report}
            labelId="preset-select-label"
            label={"Preset"}
            onChange={handleReportChange}
          >
            {options.map(item => {
              return (
                <MenuItem value={item}>{item}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div> 
      <div className="reports">
        <div className="reportsFilter">
          <h2>Filter</h2>

          <body>Filter options go here</body>

          <h3>Date Type</h3>
          <FormControl fullWidth>
            <RadioGroup row>
              <FormControlLabel value="dateSummary" control={<Radio/>} label="Date summaries"/>
              <FormControlLabel value="dateRange" control={<Radio/>} label="Date Range"/>
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth variant='outlined'>
          <InputLabel id="date-type-select-label">Date Type</InputLabel>
          <Select
            variant='outlined'
            value={dateType}
            labelId="date-type-select-label"
            label={"Date Type"}
            onChange={(e) => setDateType(e.target.value)}
          >
            {dateTypeOptions.map(item => {
              return (
                <MenuItem value={item}>{item}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        </div>
        <div className="reportsGraph">
          <h2>Report</h2>

          <body>Charts go here</body>

        </div>
      </div>
    </div>
  )
}
