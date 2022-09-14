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

const Hourly = ({items}) => {
    
    const temp = [];
    const time = [];
    console.log(items)

    const [chartData, setChartData] = useState({
      datasets: [""],
    });
    items.map(function (obj) {
      time.push(obj.title);
      temp.push(obj.temp);
    });
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
        
      
      
    },[items]);
    
    
    
    return (
      <div
        className="sm:ml-4 md:ml-24 w-screen md:w-1/2 h-72  py-2"
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