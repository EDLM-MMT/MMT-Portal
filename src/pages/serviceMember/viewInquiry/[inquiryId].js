import DefaultLayout from '@/components/layouts/DefaultLayout';
import ViewCard from '@/components/cards/ViewCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"

export function getServerSideProps(context) {
    const { inquiryId } = context.query;
    return {
      props: {
        inquiryId,
      },
    };
  }

export default function InquiryView({inquiryId}) {

    const [inquiry, setInquiry] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios
          .get(`/api/inquiry/${inquiryId}`)
          .then((res) => {
            console.log("Result inside viewInquiry", res.data);
            setInquiry(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleClick = () => {
        router.push("/serviceMember/inquiries");
    }
    
    console.log("Whats inside data:", inquiry.id)
    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    View Inquiry
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              My Inquiries </button> -{`>`} {inquiry.title}
            </div>
            <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    <ViewCard key={inquiry.id} title={inquiry.title} description={inquiry.description}/>                   
            </div>
            <div className='bg-white w-full border h-50 mt-4 rounded-md border-gray-200 p-4 pb-0 shadow'>
                Submitted on 
            </div>
          </div>
        </DefaultLayout>
    );
}