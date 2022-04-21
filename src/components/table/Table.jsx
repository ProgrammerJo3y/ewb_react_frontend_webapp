import './table.css'

export default function Table() {
    return(
        <div>
        <table className="table">
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