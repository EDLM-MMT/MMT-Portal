import DefaultLayout from "@/components/layouts/DefaultLayout";
import CounselingTable from '@/components/tables/CounselingDashboardTable';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Credits() {

    const [careerList, setCareerList] = useState([])

    useEffect(() => {
        axios
          .get(`/api/careerCounseling`)
          .then((res) => {
            setCareerList(res.data.counseling);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Credits Translation Page
                    </div> 
                </h1>

                <div className="flex flex-col mt-2">
                    <div><b>Disclaimer: </b> 
                    Credits translation are tentative and require further confirmation from the Academic Institute. These are only for planning purposes. "Hours Still Needed" is an <b><u>estimated</u></b> value based on courses completed on your transcript. Please contact ESO if further clarification is needed. </div>
                    <b> Your Progress: 65% (39 out of 60 credits transferred)</b>
                </div>  


            </div>
        </DefaultLayout>
    );
}