import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import Table from '@/components/tables/Table';
import BarGraphStatisticsViewCard from '@/components/cards/execStakeholder/HorizontalBarGraphStatisticsViewCard';
import DropdownViewCard from '@/components/cards/execStakeholder/DropdownSelectViewCard';

export default function stateEnrollment() {

    const [accountData, setAccountData] = useState([]);
    const states = ['Florida','Alabama', 'Georgia', 'Maryland'];

    const router = useRouter();


    const handleClick = () => {
        router.push("/dashboard");
    }

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                    State Enrollment Statistics
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              Dashboard</button> -{`>`} Enrollment by State
            </div>
            <div className="mb-8">
                <BarGraphStatisticsViewCard title={"Overall Statistics"} routePath={"/dashboard"}/>

            </div>
            {/* <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-8 text-xl font-semibold'>State Statistics</h1>
                
            </div> */}
            <DropdownViewCard title={"State Statistics"} options={states} width={"full"}/>

            
        </div>
      </DefaultLayout>
    );
}
