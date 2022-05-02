import './dashboard.css'
import Table from '../../components/table/Table.jsx'
import Card from '../../components/card/Card.jsx'
<script>src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"</script>

export default function Dashboard() {
  return (
    <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="cards">
        <Card title="Machine Issues"/>
        <Card title="New Feedback"/>
        </div>

        <div>
          <h2>Chart Display</h2>
          <canvas ></canvas>
        </div>

        <div>
        <h2>Washing Machine Details</h2>
        <Table/>
        </div>
    </div>
  )
}
