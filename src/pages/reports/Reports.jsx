import './reports.css'
import Barchart from '../../components/barchart/Barchart'

import { useEffect, useState} from 'react'
import { Select, FormControl, MenuItem, InputLabel, FormControlLabel, TextField, Checkbox } from '@mui/material'

import { useQuery, useLazyQuery } from '@apollo/client';
import { booking_data } from '../../graphql/queries.jsx';
import { user_data } from '../../graphql/queries.jsx';

export default function Reports() {
  // const [getBookingData, { loading: bookingsLoading, error: bookingsError, data: bookingsData }] = useLazyQuery(booking_data, {
  //   notifyOnNetworkStatusChange: true
  // });
  // const [getUserData, { loading: usersLoading, error: usersError, data: usersData }] = useLazyQuery(user_data, {
  //   notifyOnNetworkStatusChange: true
  // });

  const [reportData, setReportData] = useState({});

  // Query options
  const usageData = ["Bookings", "Users"] // Which query to use
  const groupTypeOptions = ["Monthly", "Yearly"]; // What value to show along the x-axis
  const userOptions = ["Client", "Operator"]; // Option greyed out when "Bookings" query selected

  const locationOptions = ["All", "Station 1", "Station 2", "Station 3"];
  const clientOptions = ["All", "User 1", "User 2", "User 3"];
  const operatorOptions = ["All", "Operator 1", "Operator 2", "Operator 3"];
  
  // Charts focus on showing booking quantity on the y-axis
  const [filter, setFilter] = useState({
    queryType: "Bookings",
    groupingType: "Monthly",
    startDate: "2021/06/13",
    endDate: "2022/06/18",
    userType: "Client"
  });

  async function updateFilter(key, value) {
    if (value) await setFilter({ ...filter, [key]:value });
    if (!value) {
      const newFilter = { ...filter };
      delete newFilter[key];
      await setFilter(newFilter);
    }
  }

  const bookingData = useQuery(booking_data, {
    variables: {startDate: filter.startDate.toString(), endDate: filter.endDate, grouping: filter.groupingType.toLowerCase()}
  });

  const userData = useQuery(user_data, {
    variables: {startDate: filter.startDate.toString(), endDate: filter.endDate, grouping: filter.groupingType.toLowerCase(), userType: filter.userType.toLowerCase()}
  });

  useEffect(() => {
    
  }, [filter, bookingData.loading, userData.loading]);

  if(bookingData.loading || userData.loading){
    console.log('LOADING')
    return(
      <div>...loading</div>
    )
  }

  return (
    <div className="reportsContainer">
      <div className="reportsHeader">
        <h1>Reports</h1>
      </div> 
      <div className="reports">
        <div className="reportsFilter">
          <h2>Filter</h2>
          
          <FormControl variant='outlined'>
            <InputLabel id="data-select-label" className='filterInput'>Selected data</InputLabel>
            <Select
              className='filterInput'
              variant='outlined'
              value={filter.queryType}
              labelId="data-select-label"
              label={"Selected data"}
              onChange={(e) => updateFilter("queryType", e.target.value)}
            >
              {usageData.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

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

          <FormControl variant='outlined'>
            <InputLabel id="location-select-label" className='filterInput'>User Type</InputLabel>
            <Select
              className='filterInput'
              variant='outlined'
              value={filter.userType}
              defaultValue={userOptions[0]}
              labelId="location-select-label"
              label={"User Type"}
              onChange={(e) => updateFilter("userType", e.target.value)}
              disabled={(filter.queryType === "Bookings")}
            >
              {userOptions.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          {/* <FormControl variant='outlined'>
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
          </FormControl> */}

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
          {/* <button onClick={() => loadQuery()}>Load Chart</button> */}
        </div>
        <div className="reportsGraph">
          <h2>Report</h2>
          {/* <Barchart data={reportData} filter={filter}/> */}
          <Barchart data={(filter.queryType === "Bookings" ? bookingData.data : userData.data)} filter={filter}/>
          {/* <Barchart data={reportData} filter={filter}/> */}
        </div>
      </div>
    </div>
  )
}
