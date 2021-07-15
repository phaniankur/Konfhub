import React, { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import axios from "axios";

const Charts = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let jobRole = [];
    let experience = [];
    axios
      .post("https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod/talent/profiles")
      .then(res => {
        console.log(res.data.profiles)
        for (const dataObj of res.data.profiles) {
          jobRole.push(String(dataObj.jobRole));
          experience.push(parseInt(dataObj.experience));
        }
        setChartData({
          labels: jobRole,
          datasets: [
            {
              label: "Experience",
              data: experience,
              backgroundColor: ["rgba(75, 192, 192, 0.6)", 'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'],
              borderWidth: 4
            }
          ],
          hoverOffset: 4,
          options: {
            maintainAspectRatio: false,
        }
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
      <h1>Charts</h1>
      <div>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Experience", display: true },
            
          }}
        />
      </div>
    </div>
    </>
  );
};

export default Charts;