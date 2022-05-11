import './dashboard.css'
import Table from '../../components/table/Table.jsx'
import Card from '../../components/card/Card.jsx'
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

export default function Dashboard() {
  return (
    <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="cards">
        <Card title="No. Stations" detail="0"/>
        <Card title="No. Completed Bookings" detail="0"/>
        <Card title="No. Incomplete Bookings" detail="0"/>
        
        </div>

        <div>
          <h2>Chart Display</h2>
          <canvas id="dashboardChart"></canvas>
        </div>

        <div>
        <h2>Station Details</h2>
        <Table/>
        </div>
    </div>
  )
}
