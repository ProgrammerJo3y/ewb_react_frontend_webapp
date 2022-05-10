import "./bookings.css";
import { useState, useEffect } from "react";
import data from "./booking";

export default function Bookings() {
  const [filteredItems, setFilteredItems] = useState(data);
  const [filter, setFilter] = useState({});

  function updateFilter(key, value) {
    if (value) setFilter({ ...filter, [key]: value });
    if (!value) {
      const newFilters = { ...filter };
      delete newFilters[key];
      setFilter(newFilters);
    }
  }

  useEffect(() => {
    const keys = Object.keys(filter);
    let items = data.filter((row) => {
      let isMatch = true;
      keys.forEach((key) => {
        if (!row[key].toString().toLowerCase().startsWith(filter[key].toLowerCase())) isMatch = false;
      });
      return isMatch;
    });
    setFilteredItems(items);
  }, [filter]);

  return (
    <div className="bookings">
      <h1 className="bookingsHeading">Bookings</h1>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  placeholder="id"
                  value={filter.id}
                  onChange={(e) => updateFilter("id", e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Location"
                  value={filter.location}
                  onChange={(e) => updateFilter("location", e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="UserId"
                  value={filter.userId}
                  onChange={(e) => updateFilter("userId", e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Date"
                  value={filter.date}
                  onChange={(e) => updateFilter("date", e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Time"
                  value={filter.time}
                  onChange={(e) => updateFilter("time", e.target.value)}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Notes"
                  value={filter.notes}
                  onChange={(e) => updateFilter("notes", e.target.value)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((row) => (
              <tr>
                <td>{row.id}</td>
                <td>{row.location}</td>
                <td>{row.userId}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <pre>{JSON.stringify(filter, null, 2)}</pre> */}
    </div>
  );
}
