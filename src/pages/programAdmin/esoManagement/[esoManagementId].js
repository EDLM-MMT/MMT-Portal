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

    console.log(esoData.tasks);
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

            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className="font-semibold text-xl h-10 mb-4 border-b">
                    Permissions
                </div>
                <div className="flex flex-col font-semibold">
                    <p className="p-2">
                        Branch: {esoData.branch}
                    </p>
                    <p className="p-2">
                        Permissions: {esoData.permissions}
                    </p>
                </div>
            </div>

            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className="font-semibold text-xl h-10 mb-4 border-b">
                    Assigned Tasks
                </div>
                <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                    <thead className='bg-gray-50 '>
                        <tr>
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Task ID
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Service Member Name
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Branch
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Inquiry/Career Path
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Status
                            </th> 
                            <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                                Task Duration
                            </th> 
                        </tr>
                    </thead>
        
                    {esoData.tasks?.map((task, index) => (
                        <tr key={index} className=' even:bg-gray-50 group'>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{task.taskId}</td>
                            <td className='pl-2'>{task.name}</td>
                            <td className='pl-2'>{task.branch}</td>
                            <td className='pl-2'>{task.title}</td>
                            <td className='pl-2'>{task.status}</td>
                            <td className='pl-10'>{task.duration}</td>
                            {/* <td className='pl-5'><button onClick={() => handleView(post.id)} className="text-blue-700 ml-5">{post.viewProfile} </button></td> */}
                        </tr>
                    ))}
                </table>
            </div>

            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className="font-semibold text-xl h-10 mb-4 border-b">
                    Statistics
                </div>
                <div className="flex flex-col font-semibold">
                    <p className="p-2">
                        Tasks Completed: {esoData.completedTasks}
                    </p>
                    <p className="p-2">
                        Approximate time for Task Completion: {esoData.avgTime}
                    </p>
                </div>
            </div>
            
        </div>
      </DefaultLayout>
    );
}
