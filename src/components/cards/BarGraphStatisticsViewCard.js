import { twMerge } from "tailwind-merge";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function BarGraphStatisticsViewCard({ title , routePath, className}){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

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
            text: 'State Enrollment by Status'
          },
          xaxis: {
            categories: ['Maryland', 'Alaska', 'Arizona', 'Minnesota', 'Washington'],
            labels: {
              formatter: function (val) {
                return val
              }
            }
          },
          yaxis: {
            title: {
              text: undefined
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


    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold border-b  h-10'>
                {title}
            </h1>
            <div className="mt-8">
                {/* <BarGraphTable columnTitles={["State", "Active/Separated"]}/> */}
                {(typeof window !== 'undefined') && <ReactApexChart options={state.options} series={state.series} type="bar" height={350}/>}
            </div>
        </div>
        
    )
}