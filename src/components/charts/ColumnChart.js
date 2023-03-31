import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ColumnChart({ xAxisTitle, dataName, labels, data, routePath,  }){
    
    const state = {
          
        series: [{
          name: dataName,
          data: data
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              }
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            title: {
                text: "Year",
            },
            categories: ["2019", "2020", "2021", "2022"],
            position: 'bottom',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          colors: ['#2492C9'],
          yaxis: {
            title: {
                text: "Number of Personnel",
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: true,
              formatter: function (val) {
                return val;
              }
            }
          
          },
         
        },
      
      
    };


    return(
        <div className='bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-10'>
            {(typeof window !== 'undefined')&& <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />}
        </div>
    )
}