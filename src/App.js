import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import Pie from './Components/Pie'
import Charts from './Components/Charts'
import BarChart from "./Components/Bar";
import Table from "./Components/Table";

export default function App() {
  
  return (
    <>
    <Table/>
    <Charts/>
    <Pie/>
    <BarChart/>
    </>
  )

  
}