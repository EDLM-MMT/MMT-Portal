import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PieChart({ title, series, labels }){
    
    const state = {
        series: series,
        options: {
            chart: {
            width: '100%',
            type: 'pie',
            },
            labels: labels,
            theme: {
            monochrome: {
                enabled: true
            }
            },
            plotOptions: {
            pie: {
                dataLabels: {
                offset: -5
                }
            }
            },
            title: {
            // text: title
            },
            dataLabels: {
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
            }
            },
            colors: ['#2492C9'],
            legend: {
            show: false
            }
        },
      };


    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl items-center font-semibold border-b h-10'>
                {title}
            </h1>
            <div className="mt-8">
                <ReactApexChart options={state.options} series={state.series} type="pie" height={350}/>
            </div>
        </div>
        
    )
}