import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PolarAreaChart({ title, series, labels }){
    
    const state = {
          
        series: series,
        options: {
          chart: {
            width: 380,
            type: 'polarArea'
          },
          labels: labels,
          fill: {
            opacity: 1
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          yaxis: {
            show: false
          },
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0
              },
              spokes: {
                strokeWidth: 0
              },
            }
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          }
        },
      
      
      };


    return(
        <div className='bg-white w-1/2 border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b  h-10'>
                {title}
            </h1>
            <div className="mt-8">
                <ReactApexChart options={state.options} series={state.series} type="polarArea" height={350}/>
            </div>
        </div>
        
    )
}