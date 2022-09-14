import { React, useState, useEffect, startTransition } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
const config = {
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

const Humidity = (items) => {
  let humidity = [];
  let time = [];
  const [chartData, setChartData] = useState({
    datasets: [""],
  });
  for (const obj of items.items) {
    time.push(obj.title);
    humidity.push(obj.humidity);
  }
  useEffect(() => {
    setChartData({
      labels: time,
      datasets: [
        {
          data: humidity,
          borderColor: "rgb(250,200,1,1)",
          backgroundColor: "rgba(77, 67, 29, 1)",
          fill: true,
          tension: 0.4,
        },
      ],
    });
  }, [items]);

  return (
    <div
      className="items-center justify-center ml-16"
      style={{ height: "250px", width: "900px" }}
    >
      <Chart
        type="line"
        data={chartData}
        plugins={[ChartDataLabels]}
        options={{
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              align: "end",
              labels: {
                title: {
                  color: "rgba(154, 160, 166, 1)",
                },
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Humidity;
