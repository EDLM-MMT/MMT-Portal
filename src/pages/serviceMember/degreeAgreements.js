import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import TwoChoiceCard from '@/components/cards/TwoChoiceCard';
import AddBtn from '@/components/buttons/AddButton';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Inquiry() {  
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get('../api/degreeAgreements')
          .then((res) => {
            console.log(res.data.degreeAgreements);
            setData(res.data.degreeAgreements);
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
                        My Degree Agreements
                    </div> 
                </h1>
                <div className=' flex-col flex w-1/6 justify-start pb-6'>
                    <AddBtn className="rounded-none" btnText={"Start New Degree Agreement"} link={'/serviceMember/degreePathways/'}/>
                </div>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {data?.map((card, index) => {
                        return(
                            <TwoChoiceCard key={index} title={card.title} description={card.description} 
                            buttonLabel={card.status} viewRoutePath={card.secondRoutePath} data={data} card={card} degreeIndex={index}/>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}