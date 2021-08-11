import { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './App.css';

function App() {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
//    fetch('https://reqres.in/api/users?per_page=15')
    fetch('https://localhost:8081/api/Offenders/GetOffenders_Minimal')
  
        .then(res => res.json())

   //     .then(res => {console.log(res);}, // Success!
   //          reason => {console.error(reason);}) // Error!

      .then(result => setRowData(result.data))

  }, []);

  return (
    <div className="App">
      <div className="ag-theme-alpine ag-style">
        <AgGridReact
          rowData={rowData} >
          <AgGridColumn field="dte" sortable={true} filter={true}></AgGridColumn> 
        </AgGridReact> 
      </div>
    </div>
   
  );
}

export default App;
