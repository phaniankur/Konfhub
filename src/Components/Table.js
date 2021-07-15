import React, {useState, useEffect} from 'react'
import MaterialTable from "material-table";
import axios from 'axios'

function Table() {
    const [data, setData] = useState([]);

  const columns = [
    //{ title: "ID", field: "id" },
    //{ title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Job Role", field: "jobRole" },
    { title: "Level", field: "proficiencyLevel" },
    { title: "Skills", field: 'skills' },
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
    return (
            <MaterialTable
              title="Employee Data"
              data={data.profiles}
              columns={columns}
            />
    )
}

export default Table
