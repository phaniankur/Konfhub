import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Charts = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let jobRole = [];
    let experience = [];
    axios
      .post("https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod/talent/profiles")
      .then(res => {
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
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
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
      <h1>Charts</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Experience", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
    </>
  );
};

export default Charts;