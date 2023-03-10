import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import TwoChoiceCard from '@/components/cards/TwoChoiceCard';
import AddBtn from '@/components/buttons/AddButton';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ESOInquiryDashboard() {
    
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios
          .get('../api/inquiry')
          .then((res) => {
            setData(res.data.inquiries);
          })
          .catch((err) => {
          });
    }, []);

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Service Member Inquiries
                    </div> 
                </h1>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {data?.map((card, index) => {
                        return(
                            <TwoChoiceCard key={index} title={card.title} description={card.description} 
                            buttonLabel={card.status} data={data} card={card} degreeIndex={index} 
                            firstRoutePath={card.firstRoutePath} viewRoutePath={card.secondRoutePath}
                            toggleModalUpdate={setUpdate} type="ESO" />
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}