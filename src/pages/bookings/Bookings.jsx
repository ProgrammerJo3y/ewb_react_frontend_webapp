import "./bookings.css";
import { useState, useEffect } from "react";
import data from "./booking";
import MatUITable from "../../components/table/Table";

const columns = [
  { id: "id", label: "ID" },
  { id: "location", label: "Location" },
  { id: "userId", label: "UserID" },
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "notes", label: "Notes" },
];

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
      <div className="bookingsFilterContainer">
        <input
          className="filter"
          type="text"
          placeholder="Filter ID"
          value={filter.id}
          onChange={(e) => updateFilter("id", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter Location"
          value={filter.location}
          onChange={(e) => updateFilter("location", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter UserID"
          value={filter.userId}
          onChange={(e) => updateFilter("userId", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter Date"
          value={filter.date}
          onChange={(e) => updateFilter("date", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter Time"
          value={filter.time}
          onChange={(e) => updateFilter("time", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter Notes"
          value={filter.notes}
          onChange={(e) => updateFilter("notes", e.target.value)}
        />
        <button class="exportDataButton">Export Data</button>
      </div>
      <div className="bookingsTableContainer">
        <MatUITable columns={columns} rows={filteredItems} />
      </div>
    </div>
  );
}
