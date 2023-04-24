import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import TwoChoiceCard from '@/components/cards/TwoChoiceCard';
import AddBtn from '@/components/buttons/AddButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '@/components/dropdowns/Dropdown';

export default function ESOInquiryDashboard() {
    
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selected, setSelected] = useState("");

    useEffect(() => {
        axios
          .get('../api/inquiry')
          .then((res) => {
            setData(res.data.inquiries);
          })
          .catch((err) => {
          });
    }, []);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onChange = (e) => {
        setSelected(e.target.name);
        if(e.target.name === "Status"){
            careerListSort()
        }
    }

    const careerListSort = () => {
        let newArray = data.sort(function(a, b) {
            const nameA = a.id
            const nameB = b.id
            if (nameA > nameB) {
              return 1;
            }
            if (nameA < nameB) {
              return -1;
            }
          
            return 0;
          });
        return newArray
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        ESO Inquiries
                    </div> 
                </h1>
                <div className='flex align-middle justify-between'>
                    <input type="text" className=" w-1/2 mb-6 pl-4  bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search by Service Member Name" onChange={handleChange} value={searchInput} />
                    <div className='flex flex-row align-middle'>
                        <div className='p-2 font-medium'> Sort By: </div> 
                        <Dropdown options={["Most Recent", "Status"]} keyName={"Sort"} initialValue={"Most Recent"} onChange={onChange} />
                    </div>
                </div>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {data?.filter(post => {
                        if (searchInput === ''){
                            return post;
                        } else if(post.submitted_by.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }
                    }).map((card, index) => {
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