import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { DataGrid, GridRowId } from '@mui/x-data-grid';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import './table.css';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1 
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 30, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 40, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 50, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 60, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 70, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 80, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 90, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function StickyHeadTable(props) {

  const [tableSelection, setTableSelection] = React.useState();

  React.useEffect(() => {

  });

  return (
    // Placeholder containing div. Don't think it actually works
    // Want to set a responsive height for the tableContainer component if possible

    // <div className='tableContainer'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        selectionModel={tableSelection}
        onSelectionModelChange={(selection)=>{
          if (selection.length > 1) {
            const newSelection = selection;
            const result = newSelection.filter((s) => !tableSelection.includes(s));
            setTableSelection(result);
          } else {
            setTableSelection(selection);
          }
        }}
      />
    // </div>
  );
}