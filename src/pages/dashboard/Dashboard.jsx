import './dashboard.css'
import BasicTable from '../../components/basictable/Basictable.jsx'
import Table from '../../components/table/Table'
import Card from '../../components/card/Card.jsx'
import Barchart from '../../components/barchart/Barchart'

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// Data to display on the table
const tableHeader = [
  {id: "station_id", label: "Station ID"},
  {id: "location", label: "Location"},
  {id: "active_bookings", label: "Active Bookings"},
  {id: "cancelled_bookings", label: "Cancelled Bookings"},
  {id: "completed_bookings", label: "Completed Bookings"},
];

const rows = [
  {},
];

export default function Dashboard() {
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
            <Barchart/>
          </div>
        </div>

        <div>
          <h2>Station Details</h2>
          <Table columns={tableHeader} rows={rows}/>
        </div>
    </div>
  )
}
