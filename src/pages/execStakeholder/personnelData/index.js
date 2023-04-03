import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useRouter } from "next/router"
import PieChart from '@/components/charts/PieChart';
import Toggle from '@/components/Toggle';
import { useState } from 'react'


export default function PersonnelData() {

    const [enabled, setEnabled] = useState(false)

    console.log(enabled)
    const router = useRouter();
    const handleClick = () => {
        router.push("/dashboard");
    }

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                Personnel Data by Branch
            </h1>
            <div className='flex flex-row justify-between'>
                <div>
                <button onClick={handleClick}
                className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
                Dashboard</button> -{`>`} Personnel Data by Branch
                </div>
                <div className='flex flex-row justify-end p-4'>
                    <p className='pt-1 text-lg items-center font-semibold'>Active</p>
                    <Toggle enabled={enabled} setEnabled={setEnabled}/>
                    <p className='pt-1 text-lg items-center font-semibold'>Seperated</p>

                </div>
            </div>
            {enabled ? 
            <div>
                <div className="flex flex-row justify-between gap-10 mx-10 mb-8">
                    <PieChart title={"Army"} series={[14.06783297, 11.8203863, 11.3354007, 10.62287494, 10.42589017, 9.69841177, 9.470871609, 8.340972182, 7.773422009, 6.443937355]} 
                        labels={["91X40", "68W40", "11B30", "11B40", "42A40", "68W30", "68W20", "68W10", "79R40", "91B30"]}/>
                    <PieChart title={"Coast Guard"} series={[16.65585679, 15.36191465, 12.89726294, 11.21416526, 9.498637956, 8.308470619, 7.893371384, 6.978855883, 6.05136853, 5.140095992]} 
                        labels={["BM2", "BM3", "MK3", "BM1", "ET2", "BMC", "MK2", "MKC", "OSC", "OS1"]}/>
                </div>
                <div className="flex flex-row justify-between gap-10 mx-10 mb-8">
                    <PieChart title={"Marines"} series={[16.30703691, 14.98075195, 12.49514639, 12.09465381, 7.775768535, 7.654844185, 7.53170104, 7.335337645, 7.153396421, 6.671363117]} 
                        labels={["E-4 0311", "E-5 0311", "E-5 3043", "E-4 3043", "E-4 3531", "E-3 0311", "E-4 3043", "E-5 3043", "E-5 0621", "E-5 1371"]}/>
                    <PieChart title={"Navy"} series={[26.00185889, 19.71382765, 9.620793065, 8.690447186, 8.22091278, 5.941520257, 5.90783169, 5.852786977, 5.272260774, 4.777760733]} 
                        labels={["HM3", "HM2", "ET2", "HM1", "HN", "MM2", "HMC", "IT2", "ET1", "OS2"]}/>
                </div>
            </div>
            : <div> 
                <div className="flex flex-row justify-between gap-10 mx-10 mb-8">
                    <PieChart title={"Army"} series={[15.71090388, 14.8771988, 11.61675966, 11.42762721, 10.82246119, 9.809836622, 7.042606347, 6.722921446, 6.437536673, 5.53214818]} 
                        labels={["68W10", "11B30", "11B10", "68W20", "11B20", "68W30", "25B10", "91B10", "91B20", "91B30"]}/>
                    <PieChart title={"Coast Guard"} series={[13.5162166, 13.23148205, 13.15800216, 11.72820607, 11.24956626, 8.516522769, 7.59088033, 7.137754373, 7.064274488, 6.807094891]} 
                        labels={["BMC", "BM2", "MK2", "BM1", "ET2", "ET1", "MKC", "MK3", "MK1", "OS1"]}/>
                </div>
                <div className="flex flex-row justify-between gap-10 mx-10 mb-8">
                    <PieChart title={"Marines"} series={[17.23352343, 11.46010935, 10.76635899, 10.37587944, 9.070688067, 9.007976169, 8.309326435, 8.075626629, 7.873282772, 7.827228722]} 
                        labels={["E-4 3043", "E-5 3043", "E-5 0311", "E-4 3043", "E-3 0311", "E-3 3043", "E-4 0311", "E-6 3043", "E-4 0111", "E-5 0111" ]}/>
                    <PieChart title={"Navy"} series={[20.90306411, 16.66338907, 14.37344451, 13.09835181, 7.814326575, 6.286750005, 6.129971835, 5.205690774, 4.786158946, 4.738852362]} 
                        labels={["HM2", "HM3", "HM1", "HN", "IT2", "IT1", "HMC", "MMN1", "ET2", "MA2"]}/>
                </div>
            </div> }
        </div>
      </DefaultLayout>
    );
}
