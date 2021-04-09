import autoprefixer from 'autoprefixer';

import {getPeople, editPerson , deletePerson, addPerson} from '../DB/data'
 
import React, { useState, useContext, useEffect } from 'react';
import MaterialTable from 'material-table';

import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
//import { deleteProduct, deleteProducts, updateProduct } from '../../../../firebase/db/product';



import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
export default function table(){

    const [people, setPeople]= React.useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    React.useEffect(()=>{

        setPeople(getPeople());
        console.log("people :", getPeople())

    },[])

      
      return (
        <Grid container style={{marginTop:'100px'}}  alignItems="center"
        justify="center"  spacing={3}>
         <Grid item  xs={12} xl={10}  >
             <MaterialTable
          columns={[
            { title: "Id", field: "id", type: "numeric",
            cellStyle: {
              textAlign:'center'
        
          },
          headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            textAlign:'center',
          } },
            { title: "Name", field: "name" ,
            cellStyle: {
              textAlign:'center',
          },
          headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            textAlign:'center',
          }},
            { title: "LastName", field: "lastName" ,
            cellStyle: {
              textAlign:'center'
          },
          headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            textAlign:'center',
          }},
           
          
          ]}
          data={people}
          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{
            rowStyle: rowData => ({
              backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
            })
          }}
          title="People"
        />
        </Grid>
        </Grid>
      );
};

    
