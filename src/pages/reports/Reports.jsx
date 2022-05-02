import './reports.css'
import { useState} from 'react'
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material';

export default function Reports() {
  
  const [report, setReport] = useState('report');

  const options = ["Preset 1", "Preset 2", "Preset 3"];

  const handleReportChange = (event) => {
    // Handle chart population here
    setReport(event.target.value);
  }

  return (
    <div className="reportsContainer">
      <div className="reportsHeader">
        <h1>Reports</h1>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Preset</InputLabel>
          <Select
            labelId="preset-select-label"
            id="preset-select"
            value={report}
            label="Preset"
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
          <h1>Filter</h1>
          <body>Filter options go here</body>
        </div>
        <div className="reportsGraph">
          <h1>Report</h1>
          <body>Charts go here</body>
        </div>
      </div>
    </div>
  )
}
