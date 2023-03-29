import { twMerge } from "tailwind-merge";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Dropdown from "../dropdowns/Dropdown";
import { useState } from "react";



export default function BarGraphStatisticsViewCard({ title , routePath, className}){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    const [graph, setGraph] = useState("Personnel Percent");

    const state = {
          
        series: [{
          name: 'Active',
          data: [19712, 16509, 4440, 1974, 891]
        }, {
          name: 'Separated',
          data: [1905, 7411, 2005, 1028, 399]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: false,
                  offsetX: 0,
                  style: {
                    fontSize: '7px',
                    fontWeight: 900
                  }
                }
              }
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: 'Total Personnel Distribution by State'
          },
          xaxis: {
            categories: ['Maryland', 'Alaska', 'Arizona', 'Minnesota', 'Washington'],
            labels: {
              formatter: function (val) {
                return val
              }
            },
            title: {
              text: "Number of Personnel"
            },
          },
          yaxis: {
            title: {
              text: "States"
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
        secondOptions: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: false,
                  offsetX: 0,
                  style: {
                    fontSize: '7px',
                    fontWeight: 900
                  }
                }
              }
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: 'Personnel Status Percent Distribution by State'
          },
          xaxis: {
            categories: ['Maryland', 'Alaska', 'Arizona', 'Minnesota', 'Washington'],
            labels: {
              formatter: function (val) {
                return val
              }
            },
            title: {
              text: "Personnel Percentage"
            },
          },
          yaxis: {
            title: {
              text: "States"
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
    };

    const onChange = (e) => {
      console.log(e.target.value);
      if(e.target.value === "Personnel Percent"){
        setGraph("Personnel Percent")
      } else{
        setGraph("Total Personnel")
      }
    }


    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-med font-semibold border-b  h-10'>
                {title}
                <div>
                  <div className='font-medium'> <b className="pr-4">Display:</b>
                    <Dropdown options={["Personnel Percent", "Total Personnel"]} keyName={"Display"} initialValue={"Personnel Percent"} onChange={onChange} />
                  </div> 
                </div>
            </h1>
            <div className="mt-8">
                {/* <BarGraphTable columnTitles={["State", "Active/Separated"]}/> */}
                {(typeof window !== 'undefined' && graph === "Total Personnel") && <ReactApexChart options={state.options} series={state.series} type="bar" height={350}/>}
                {(typeof window !== 'undefined' && graph === "Personnel Percent") && <ReactApexChart options={state.secondOptions} series={state.series} type="bar" height={350}/>}
            </div>
        </div>
        
    )
}