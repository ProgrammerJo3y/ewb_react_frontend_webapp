import "./bookings.css";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { get_all_bookings } from '../../graphql/queries'
import { edit_booking, delete_booking } from '../../graphql/mutations'
import MatUITable from "../../components/table/Table";
import { resolveReadonlyArrayThunk } from "graphql";
import moment from 'moment';



const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "transaction_location", headerName: "Location", flex: 1, editable: true },
  { field: "transaction_notes", headerName: "Notes", flex: 1, editable: true },
  { field: "user_client_id", headerName: "Client ID", flex: 1, editable: true },
  { field: "transaction_date", headerName: "Date", flex: 1, editable: true },
  { field: "transaction_time", headerName: "Time", flex: 1, editable: true },

];

export default function Bookings() {
  const result = useQuery(get_all_bookings);
  const [EditBooking, { id }] = useMutation(edit_booking);

  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState({});
  const [resultCopy, setResultCopy] = useState(result);
  const [DeleteBooking, { done, error }] = useMutation(delete_booking);
  const [selectionModel, setSelectionModel] = useState([]);

  function formatDates() {
    return result.data.getAllBookings.map((item => {
      const object = Object.assign({}, item, {transaction_date: new Date(item.transaction_time).toLocaleDateString()});
      object['transaction_time'] = new Date(item.transaction_time).toLocaleTimeString();
      return object;
    }));
  }
  const  deleteBookingOnClick = async e =>{
    e.preventDefault();
    if(selectionModel){

      for(const selection of selectionModel){
        const user = await DeleteBooking ({
          variables:  {bookingId : selection},
          result :  {done, error}
        });
        if(user.data.deleteBooking.done){
  
          setFilteredItems((filteredItems) =>  filteredItems.filter( (r) => 
          !selectionModel.includes(r.id)));
        }
      }
      result.refetch();
    }
  }
  // function confirmRowEdit(message) {
  //   return new Promise(function (resolve, reject) {
  //     let confirmed = window.confirm(message);
  //     return confirmed ? resolve(true) : reject(false);
  //   })
  // }

  const handleRowEditCommit = (newRow, oldRow) =>{
    // const message = "The following changes will be saved: \n" + "New Booking: \n" + newRow.toString() + "\nOld Booking: \n" + oldRow.toString()
    // return new Promise(function (resolve, reject) {
    //   const promise = confirmRowEdit(message)
    //   .then(async () => {
        console.log(newRow);
        const mergedDate = new Date((moment(newRow.transaction_date, "DD/MM/YYYY").format("MM/DD/YYYY")) + " " + newRow.transaction_time).toString();
        console.log(mergedDate);
        const user = EditBooking ({
          variables:  {bookingId : newRow.id, transactionLocation: newRow.transaction_location, transactionNotes: newRow.transaction_notes, userClientId: newRow.user_client_id, dateAsString: mergedDate},
          result :  {id}
        });
        window.alert("Booking updated successfully")
    //   })
    //   return promise ? resolve(true) : reject(false);
    // })
  }

  useEffect(() => {
    const keys = Object.keys(filter);
    if (!result.loading) {

      // Assign query results to an extensible copy and add a date field 'transaction_date'
      const resultCopy = formatDates();

      let items = resultCopy.filter((row) => {
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
          placeholder="Filter Notes"
          value={filter.notes}
          onChange={(e) => updateFilter("transaction_notes", e.target.value)}
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
        <button className="exportDataButton" onClick={deleteBookingOnClick}>Delete</button>
      </div>
      <div className="bookingsTableContainer" >
        <MatUITable 
        columns={columns} 
        rows={filteredItems} 
        setSelectionModel={setSelectionModel}
        handleOnEditCommit={handleRowEditCommit} />
      </div>
    </div>
  );
}

