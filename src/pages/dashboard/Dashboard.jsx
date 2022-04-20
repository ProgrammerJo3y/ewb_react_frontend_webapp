import './dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Machine Issues</p>
        <p>Income Errors</p>
        <p>New Feedback</p>
        <h2>Washing Machine Details</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Bookings</th>
            <th>Errors</th>
            <th>Feedback</th>
            <th>View</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Port Villa</td>
            <td>101</td>
            <td></td>
            <td>Handle worn down</td>
            <td></td>
          </tr>
        </table>
    </div>
  )
}
