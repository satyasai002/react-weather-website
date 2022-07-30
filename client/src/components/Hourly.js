import {React,useState,useEffect, startTransition} from 'react';
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
import {  } from "react-router-dom";
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
const config = {
  options: {
    maintainAspectRatio: false,
    scales:{
      y: {
        beginAtZero:true,
        ticks:{
          display:false
        }
      },
      x: {
        grid: {
          display:false,
        }
      }
    }


  },
};

const Hourly = (items) => {
    
    let temp = [];
    let time = [];
    const [chartData, setChartData] = useState({
      datasets: [""],
    });
    for (const obj of items.items) {
      time.push(obj.title);
      temp.push(obj.temp);
    }
    useEffect(() =>{
        setChartData({
          labels: time,
          datasets: [
            {
              data: temp,
              borderColor: "rgb(250,200,1,1)",
              backgroundColor: "rgba(77, 67, 29, 1)",
              fill: true,
              tension: 0.4,
            },
          ],
        });
        
      
      
    },[]);
    
    
    
    return (
      <div
        className=" ml-40 py-2"
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
}

export default Hourly;