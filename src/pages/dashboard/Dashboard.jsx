import './dashboard.css'
import Table from '../../components/table/Table.jsx'
import Card from '../../components/card/Card.jsx'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="cards">
        <Card title="Machine Issues"/>
        <Card title="Income Errors"/>
        <Card title="New Feedback"/>
        </div>

        <div>
        <h2>Washing Machine Details</h2>
        <Table/>
        </div>
    </div>
  )
}
