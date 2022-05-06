import './reports.css'
import Barchart from '../../components/barchart/Barchart'

import { useState} from 'react'
import { Select, FormControl, MenuItem, InputLabel, Radio, RadioGroup, FormLabel, FormControlLabel, TextField, Checkbox } from '@mui/material'


export default function Reports() {

  // Charts focus on showing booking quantity on the y-axis

  // General filter options
  const usageData = ["Bookings", "Clients", "Stations"]
  const groupTypeOptions = ["No grouping", "Time of Day", "Week Days", "Months", "Years", "Users", "Operators"];
  const locationOptions = ["All", "Station 1", "Station 2", "Station 3"];
  const clientOptions = ["All", "User 1", "User 2", "User 3"]
  const operatorOptions = ["All", "Operator 1", "Operator 2", "Operator 3"]
  
  // States for filter queries
  const [reportData, setReportData] = useState(usageData[0]); // Data that is filtered for display. Default is booking data
  const [groupingType, setGroupingType] = useState(groupTypeOptions[0]); // Week day, months, years, users, operators, stations
  const [startDate, setStartDate] = useState('startDate'); // Specify date (not time) for filtering
  const [endDate, setEndDate] = useState('endDate');
  const [location, setLocation] = useState(locationOptions[0]); // Location or station, not sure
  const [client, setClient] = useState(clientOptions[0]); // Single client to filter by
  const [operator, setOperator] = useState(operatorOptions[0]); // Single operator to filter by

  // Filters for bookings
  const [completedFilter, setCompletedFilter] = useState(true); // Show all completed bookings
  const [cancelledFilter, setCancelledFilter] = useState(false); // Show all cancelled bookings
  const [startTimeFilter, setStartTimeFilter] = useState('startTimeFilter'); // Additional filter by time of day
  const [endTimeFilter, setEndTimeFilter] = useState('endTimeFilter');
  const [bookingCostFilter, setBookingCostFilter] = useState(-1); // Upper cost bound for bookings. Negative includes all


  const handleDateRangeStartChange = (newDate) => {
    setStartDate(newDate);
  };

  const handleDateRangeEndChange = (newDate) => {
    setEndDate(newDate);
  };

  return (
    <div className="reportsContainer">
      <div className="reportsHeader">
        <h1>Reports</h1>
      </div> 
      <div className="reports">
        <div className="reportsFilter">
          <h2>Filter</h2>
          
          <h3>Data</h3>
          <FormControl variant='outlined'>
            <InputLabel id="data-select-label">Selected data</InputLabel>
            <Select
              variant='outlined'
              value={reportData}
              labelId="data-select-label"
              label={"Selected data"}
              onChange={(e) => setReportData(e.target.value)}
            >
              {usageData.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <h3>Group by</h3>
          {/* Input for date sorting/binning along the x-axis */}
          <FormControl variant='outlined'>
            <InputLabel id="grouping-type-select-label">Group by</InputLabel>
            <Select
              variant='outlined'
              value={groupingType}
              labelId="grouping-type-select-label"
              label={"Group by"}
              onChange={(e) => setGroupingType(e.target.value)}
            >
              {groupTypeOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          
          <h3>Date Range</h3>
          {/* Date range input */}
          <div class="dateRangeContainer">
            <TextField
              id="start"
              label="Start Date"
              type="date"
              defaultValue={startDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDateRangeStartChange}
            />
            <TextField
              id="end"
              label="End Date"
              type="date"
              defaultValue={endDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDateRangeEndChange}
            />
          </div>

          <h3>Location</h3>
            <FormControl variant='outlined'>
            <InputLabel id="location-select-label">Location</InputLabel>
            <Select
              variant='outlined'
              value={location}
              labelId="location-select-label"
              label={"Location"}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locationOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <h3>Client</h3>
            <FormControl variant='outlined'>
            <InputLabel id="client-select-label">Client</InputLabel>
            <Select
              variant='outlined'
              value={client}
              labelId="client-select-label"
              label={"Client"}
              onChange={(e) => setClient(e.target.value)}
            >
              {clientOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <h3>Operator</h3>
            <FormControl variant='outlined'>
            <InputLabel id="operator-select-label">Operator</InputLabel>
            <Select
              variant='outlined'
              value={operator}
              labelId="operator-select-label"
              label={"Operator"}
              onChange={(e) => setOperator(e.target.value)}
            >
              {operatorOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <h3>Booking Status</h3> 
          <FormControlLabel control={<Checkbox value={completedFilter} defaultChecked onChange={(e) => setCompletedFilter(e.target.value)}/>} label="Completed"/>
          <FormControlLabel control={<Checkbox value={cancelledFilter} onChange={(e) => setCancelledFilter(e.target.value)}/>} label="Cancelled"/>

          <h3>Booking Cost</h3>
          <TextField
              id="costTxt"
              label="Max cost"
              type="number"
              defaultValue={bookingCostFilter}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setBookingCostFilter(e.target.value)}
            />

        </div>
        <div className="reportsGraph">
          <h2>Report</h2>
          
          <Barchart/>

        </div>
      </div>
    </div>
  )
}
