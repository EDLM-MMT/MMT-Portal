import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"

export function getServerSideProps(context) {
    const { esoManagementId } = context.query;
    return {
      props: {
        esoManagementId,
      },
    };
  }

export default function ESOManagementView({esoManagementId}) {

    const [esoData, setEsoData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios
          .get(`/api/programAdmin/${esoManagementId}`)
          .then((res) => {
            setEsoData(res.data);
        })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleClick = () => {
        router.push("/programAdmin/esoManagement");
    }

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    {esoData.name} - ESO
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              ESO Management</button> -{`>`} {esoData.name}
            </div>
            
        </div>
      </DefaultLayout>
    );
}
