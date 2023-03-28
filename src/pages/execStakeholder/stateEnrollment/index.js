import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import Table from '@/components/tables/Table';
import BarGraphStatisticsViewCard from '@/components/cards/BarGraphStatisticsViewCard';

export default function stateEnrollment() {

    const [accountData, setAccountData] = useState([]);
    const router = useRouter();


    const data = [
        ["01/22/2023 15:14 PM", 3, 1, 1, 2],
        ["01/21/2023 14:32 PM", 2, "", 2, 1],
        ["01/20/2023 12:18 PM", 3, 1, 1, 4],
        ["01/20/2023 09:14 AM", "", 2, 2, 1],
        ["01/19/2023 15:14 PM", 3, 1, "", 2],
        ["01/18/2023 15:14 PM", 2, 1, 2, ""],

    ]

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
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-8 text-xl font-semibold'>State Statistics</h1>
                <Table columnTitles={["Date/Time", "Trascripts", "Inquiries", "Degree Agreements", "Degree Pathways"]} rowsData={data}/>
            </div>
            
        </div>
      </DefaultLayout>
    );
}
