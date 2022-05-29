import './dashboard.css'
import { useState, useEffect} from 'react'
import BasicTable from '../../components/basictable/Basictable.jsx'
import Table from '../../components/table/Table'
import Card from '../../components/card/Card.jsx'
import Barchart from '../../components/barchart/Barchart'
import { useQuery } from '@apollo/client'
import { booking_data } from '../../graphql/queries.jsx';

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



export default function Dashboard() {

  const [filter, setFilter] = useState({
    queryType: "Bookings",
    groupingType: "Monthly",
    startDate: "2021/06/13",
    endDate: "2022/06/18",
    userType: "Client"
  });
  const [queryResponse, setQueryResponse] = useState({});

  const result = useQuery(booking_data, {
    variables: {startDate: filter.startDate.toString(), endDate: filter.endDate, grouping: filter.groupingType.toLowerCase()}
  });

  useEffect(() => {

  }, [filter, result.loading]);

  if(result.loading){
    console.log('LOADING')
    return(
      <div>...loading</div>
    )
  }

  return (
    <div className="dashboard">
        <h1 className="dashboardHeading">Dashboard</h1>

        <div className="cards">
          <Card title="No. Stations" detail="0"/>
          <Card title="No. Completed Bookings" detail="0"/>
          <Card title="No. Incomplete Bookings" detail="0"/>
        </div>

        <div className='charts'>
          <div className='chartWrapper'>
            <h2>Monthly Bookings</h2>
            <Barchart data={result.data} filter={filter}/>
          </div>
        </div>

        <div>
          <h2>Station Details</h2>
          {/* <Table columns={tableHeader} rows={rows}/> */}
        </div>
    </div>
  )
}
