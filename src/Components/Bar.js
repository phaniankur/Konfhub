import React, { useState, useEffect } from "react";
import { Bar} from "react-chartjs-2";
import axios from "axios";

const Piechart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let location = [];
    let number = []
    
    axios
      .post("https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod/talent/profiles")
      .then(res => {
        
        for (const dataObj of res.data.profiles) {
          location.push(String(dataObj.city));
          number.push(parseInt(dataObj.visibilityDuration));
           
        }
        setChartData({
            labels: [
                location
              ],
          datasets: [
            {
              label: 'Cities',
              data: number,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
              "rgba(75, 192, 192, 0.6)",
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'],
              borderWidth: 2,
              hoverOffset: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
      <>
    <div className="App">
      <h1>Bar</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            
          }}
        />
      </div>
    </div>
    </>
  );
};

export default Piechart;