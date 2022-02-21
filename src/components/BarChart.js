import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

const BarChart = () => {
  const [chartData, setChartData] = useState({

    labels: ['', '', '', '', ''],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: '',
        borderColor: '',
        borderWidth:1
      },
      {
        label: '',
        data: [],
        backgroundColor: '',
        borderColor: '',
        borderWidth:1
      },
    ],
  });

  useEffect(() => {
    const fetchChartData = async () => {
      const url = "http://localhost:5000/BPData";
      const dataDay = [];
      const dataSys = [];
      const dataDias = [];

      await fetch(url)
        .then((chartData) => {
          const res = chartData.json();
          return res;
        })
        .then((res) => {
          for (const val of res) {
            dataSys.push(val.systolic);
            dataDias.push(val.diastolic);
            dataDay.push(val.day);
          }
          setChartData ({
            labels: dataDay,
            datasets: [
              {
                label: 'SYSTOLIC',
                data: dataSys,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
              },
              {
                label: 'DIASTOLIC',
                data: dataDias,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
              },
            ],
            
          });
        })
        .catch((e) => {
          console.log("Error", e);
        });
    };

    fetchChartData();
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{ maintainAspectRatio: false }}
        height={400}
        width={400}
      />
    </div>
  )
};

export default BarChart;
