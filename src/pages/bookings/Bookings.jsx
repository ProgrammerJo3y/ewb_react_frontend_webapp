import "./bookings.css";
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { get_all_bookings } from '../../graphql/queries'
import MatUITable from "../../components/table/Table";

import dummyData from "./booking";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "transaction_location", headerName: "Location", flex: 1 },
  { field: "trasnaction_notes", headerName: "Notes", flex: 1 },
  { field: "user_client_id", headerName: "Date", flex: 1 },
  { field: "transaction_time", headerName: "Time", flex: 1 },

];

export default function Bookings() {
  const result = useQuery(get_all_bookings);
  const [filteredItems, setFilteredItems] = useState([]);
  //const [filteredItems, setFilteredItems] = useState(dummyData);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const keys = Object.keys(filter);
    let items = filteredItems.filter((row) => {
      let isMatch = true;
      keys.forEach((key) => {
        if (!row[key].toString().toLowerCase().startsWith(filter[key].toLowerCase())) isMatch = false;
      });
      return isMatch;
    });
    setFilteredItems(items);
  }, [filter]);

  if(result.loading){
    console.log('LOADING')
    return(
      <div>...loading</div>
    )
  }

  // setFilteredItems(result.data.getAllBookings); <----------------------- THE PROBLEM IS TRYING TO SET STATE HERE
  //setFilteredItems(dummyData)
  
  async function updateFilter(key, value) {
    if (value) await setFilter({ ...filter, [key]: value });
    if (!value) {
      const newFilters = { ...filter };
      delete newFilters[key];
      await setFilter(newFilters);
    }
  }

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
        <button className="exportDataButton">Export Data</button>
      </div>
      <div className="bookingsTableContainer" >
        <MatUITable columns={columns} rows={filteredItems} />
      </div>
    </div>
  );
}

