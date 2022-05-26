import './reports.css'
import Barchart from '../../components/barchart/Barchart'

import { useEffect, useState} from 'react'
import { Select, FormControl, MenuItem, InputLabel, FormControlLabel, TextField, Checkbox } from '@mui/material'

import { useQuery } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { booking_data } from '../../graphql/queries.jsx';
import { user_data } from '../../graphql/queries.jsx';

export default function Reports() {
  const [getBookingData, { bookloading, bookerror, bookdata }] = useLazyQuery(booking_data);
  const [getUserData, { userloading, usererror, userdata }] = useLazyQuery(user_data);

  // General filter options
  const usageData = ["Bookings", "Clients", "Stations"]
  const groupTypeOptions = ["No grouping", "Time of Day", "Week Days", "Months", "Years", "Users", "Operators"];
  const locationOptions = ["All", "Station 1", "Station 2", "Station 3"];
  const clientOptions = ["All", "User 1", "User 2", "User 3"]
  const operatorOptions = ["All", "Operator 1", "Operator 2", "Operator 3"]
  
  // Charts focus on showing booking quantity on the y-axis
  const [filter, setFilter] = useState({});

  // Data returned from back-end query
  const [reportData, setReportData] = useState(usageData[0]); // Data that is filtered for display. Default is booking data

  function updateFilter(key, value) {
    if (value) setFilter({ ...filter, [key]:value });
    if (!value) {
      const newFilter = { ...filter };
      delete newFilter[key];
      setFilter(newFilter);
    }
    getBookingData({
      variables: {startDate: "2021/06/13", endDate: "2022/06/18", grouping: "monthly"}
    });
    const {booktotal, bookyear, bookmonth} = bookdata;

    getUserData({
      variables: {startDate: "2021/06/13", endDate: "2022/06/18", grouping: "monthly", userType: "client"}
    });
    const {usertotal, useryear, usermonth} = userdata;
  }

  return (
    <div className="reportsContainer">
      <div className="reportsHeader">
        <h1>Reports</h1>
      </div> 
      <div className="reports">
        <div className="reportsFilter">
          <h2>Filter</h2>
          
          {/* <h3>Data</h3> */}
          <FormControl variant='outlined'>
            <InputLabel id="data-select-label" className='filterInput'>Selected data</InputLabel>
            <Select
              className='filterInput'
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

          {/* <h3>Group by</h3> */}
          {/* Input for date sorting/binning along the x-axis */}
          <FormControl variant='outlined' className='filterInput'>
            <InputLabel id="grouping-type-select-label" className='filterInput'>Group by</InputLabel>
            <Select
              className='filterInput'
              variant='outlined'
              value={filter.groupingType}
              defaultValue={groupTypeOptions[0]}
              labelId="grouping-type-select-label"
              label={"Group by"}
              onChange={(e) => updateFilter("groupingType", e.target.value)}
            >
              {groupTypeOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          
          {/* <h3>Date Range</h3> */}
          {/* Date range input */}
          <div class="dateRangeContainer">
            <TextField
              className='filterInput'
              id="start"
              label="Start Date"
              type="date"
              defaultValue={filter.startDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => updateFilter("startDate", e.target.value)}
            />
            <TextField
              className='filterInput'
              id="end"
              label="End Date"
              type="date"
              defaultValue={filter.endDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => updateFilter("endDate", e.target.value)}
            />
          </div>

          {/* <h3>Location</h3> */}
            <FormControl variant='outlined'>
            <InputLabel id="location-select-label" className='filterInput'>Location</InputLabel>
            <Select
              className='filterInput'
              variant='outlined'
              value={filter.location}
              defaultValue={locationOptions[0]}
              labelId="location-select-label"
              label={"Location"}
              onChange={(e) => updateFilter("location", e.target.value)}
            >
              {locationOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          {/* <h3>Client</h3> */}
            <FormControl variant='outlined'>
            <InputLabel id="client-select-label" className='filterInput'>Client</InputLabel>
            <Select
              className='filterInput'
              variant='outlined'
              value={filter.client}
              defaultValue={clientOptions[0]}
              labelId="client-select-label"
              label={"Client"}
              onChange={(e) => updateFilter("client", e.target.value)}
            >
              {clientOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          {/* <h3>Operator</h3> */}
            <FormControl variant='outlined'>
            <InputLabel id="operator-select-label" className='filterInput'>Operator</InputLabel>
            <Select
              className='filterInput'
              variant='outlined'
              value={filter.operator}
              defaultValue={operatorOptions[0]}
              labelId="operator-select-label"
              label={"Operator"}
              onChange={(e) => updateFilter("operator", e.target.value)}
            >
              {operatorOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          {/* <h3>Booking Status</h3> 
          <FormControlLabel
            className='filterInput'
            control={
              <Checkbox
                value={filter.completed}
                defaultChecked
                onChange={(e) => updateFilter("completed", e.target.value)}
              />}
              label="Completed"
          />
          <FormControlLabel
            className='filterInput'
            control={
              <Checkbox
                value={filter.cancelled}
                onChange={(e) => updateFilter("cancelled", e.target.value)}
              />}
              label="Cancelled"
          />

          <h3>Booking Cost</h3>
          <TextField
              className='filterInput'
              id="costTxt"
              label="Max cost"
              type="number"
              value={filter.bookingCost}
              defaultValue={-1}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => updateFilter("bookingCost", e.target.value)}
            /> */}

        </div>
        <div className="reportsGraph">
          <h2>Report</h2>
          
          <Barchart/>

        </div>
      </div>
    </div>
  )
}
