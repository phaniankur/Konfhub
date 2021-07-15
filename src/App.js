import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import Pie from './Components/Pie'
import Charts from './Components/Charts'
import BarChart from "./Components/Bar";

export default function App() {
  const [data, setData] = useState([]);


  const columns = [
    //{ title: "ID", field: "id" },
    //{ title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Job Role", field: "jobRole" },
    { title: "Level", field: "proficiencyLevel" },
    { title: "State", field: 'state' },
    { title: "City", field: 'city' },
    { title: "LinkedIn", field: 'linkedinUrl' }
  ]


  const getData = () => {
    axios.post('https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod/talent/profiles')
    //.then(res=> console.log(JSON.stringify(res.data.profiles)))
    .then(res=> setData(res.data))
  };

  useEffect(() => {
    getData();
  }, []);
console.log(data.profiles)
  return (
    <>
    <div>
      <MaterialTable
        title="Employee Data"
        data={data.profiles}
        columns={columns}
      />
    </div> 
    <Charts/>
    <Pie/>
    <BarChart/>
    </>
  )

  
}