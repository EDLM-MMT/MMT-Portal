import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import ViewCard from '@/components/cards/ViewCard';
import AddBtn from '@/components/buttons/AddButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import inquiryData from '@/data/service_member/inquiries.json'; //bad practice but just making sure it works


export default function viewInquiry() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get('../api/inquiry')
          .then((res) => {
            console.log("Result inside viewInquiry", res.data.inquiries);
            let data =res.data.inquiries;
            data.forEach((inquiry, index) =>{
                console.log("Testing", inquiry.id)
            })
            setData(res.data.inquiries);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    console.log(data);

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        View Inquiry
                    </div> 
                </h1>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {data?.map((card, index) => {
                        return(
                            <ViewCard key={index} title={card.title} description={card.description} buttonLabel={card.status} firstRoutePath={card.firstRoutePath} viewRoutePath={card.secondRoutePath}/>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}