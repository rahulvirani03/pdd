import React, { Component } from 'react';
import { forwardRef } from 'react';
import axios from 'axios'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import '../styles/Vaccination.css';
import { makeStyles } from "@material-ui/core";


class VaccinationTable extends Component {
     constructor()
     {
         super()
        this.state={
            sdata:[]
        }
     }
componentDidMount()
{
   
   this.getData()
  
}
async getData(){
    const res = await axios.get('https://india-covid19vaccine.github.io/api/state_latest.json')
    console.log(res.data)
    this.setState({sdata: res.data})
  
}
render() {
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
      };
    return (
        <div className="Vaccine">
          <br/>
          <h2>Vaccination Details</h2>
          <hr/>
          <MaterialTable
          icons={tableIcons}
            columns={[
              { title: "State", field: "state"},
              { title: "Population", field: "population"},
              {title:'Total Doses',field:'total_doses'},

              {
                title: "Total Vaccinated",
                field: "total_vaccinated",
              },
              {
                title: "Total Fully Vaccinated",
                field: "total_fully_vaccinated",
              }

            ]}
            data={this.state.sdata}
            title=""
            options={{
              headerStyle: {
                backgroundColor: '#3b3c3d',
                color: '#feffff',
                fontSize: '1rem'
              },
              tableLayout: {
                AddBox: true
              }
            }}
          />
      </div>
    );
  }
}

export default VaccinationTable;

