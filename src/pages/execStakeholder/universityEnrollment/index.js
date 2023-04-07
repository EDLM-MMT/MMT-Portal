import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import VerticalBarGraphStatisticsViewCard from '@/components/cards/execStakeholder/VerticalBarGraphCard';
import BarGraphStatisticsViewCard from '@/components/cards/execStakeholder/HorizontalBarGraphStatisticsViewCard';
import BarChart from '@/components/charts/BarChart';
import DateRangeViewCard from '@/components/cards/execStakeholder/DateRangeViewCard';

export default function universityEnrollment() {

    const [accountData, setAccountData] = useState([]);
    const router = useRouter();
    const years = ['2019','2020', '2021', '2022'];


    const handleClick = () => {
        router.push("/dashboard");
    }

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                    University Enrollment Statistics
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              Dashboard</button> -{`>`} Enrollment by University
            </div>
            <div className="flex flex-row justify-between mb-8">
                <DateRangeViewCard title={"Overall Statistics"} options={years} width={"1/2"}/>
                <VerticalBarGraphStatisticsViewCard title={"Active Service Members Enrolled"} routePath={"/dashboard"}/>
            </div>
            <div>
                <BarChart title={"Institute Statistics"} routePath={"/dashboard"}/>
                
            </div>
            
        </div>
      </DefaultLayout>
    );
}
