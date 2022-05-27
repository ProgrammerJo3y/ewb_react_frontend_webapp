import "./bookings.css";
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { get_all_bookings } from '../../graphql/queries'
import MatUITable from "../../components/table/Table";



const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "transaction_location", headerName: "Location", flex: 1 },
  { field: "transaction_notes", headerName: "Notes", flex: 1 },
  { field: "user_client_id", headerName: "Client ID", flex: 1 },
  { field: "transaction_date", headerName: "Date", flex: 1 },
  { field: "transaction_time", headerName: "Time", flex: 1 },

];

export default function Bookings() {
  const result = useQuery(get_all_bookings);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const keys = Object.keys(filter);
    if (!result.loading) {
      let items = result.data.getAllBookings.filter((row) => {
        let isMatch = true;
        keys.forEach((key) => {
          console.log(row[key] , filter[key]);
          if (!row[key].toString().toLowerCase().startsWith(filter[key].toLowerCase())) isMatch = false;
        });
        return isMatch;
      });
      setFilteredItems(items);
    }
  }, [filter, result.loading]);

  if(result.loading){
    console.log('LOADING')
    return(
      <div>...loading</div>
    )
  }
  
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
          onChange={(e) => updateFilter("transaction_location", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter UserID"
          value={filter.userId}
          onChange={(e) => updateFilter("user_client_id", e.target.value)}
        />

        {/* As there is no transaction_date value yet in the date, using this filter breaks */}

        {/* <input
          className="filter"
          type="text"
          placeholder="Filter Date"
          value={filter.date}
          onChange={(e) => updateFilter("transaction_date", e.target.value)}
        /> */}

        <input
          className="filter"
          type="text"
          placeholder="Filter Time"
          value={filter.time}
          onChange={(e) => updateFilter("transaction_time", e.target.value)}
        />
        <input
          className="filter"
          type="text"
          placeholder="Filter Notes"
          value={filter.notes}
          onChange={(e) => updateFilter("transaction_notes", e.target.value)}
        />
        <button className="exportDataButton">Export Data</button>
      </div>
      <div className="bookingsTableContainer" >
        <MatUITable columns={columns} rows={filteredItems} />
      </div>
    </div>
  );
}

