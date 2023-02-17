import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import profileImage from '@/../public/profile-picture.png';
import Image from 'next/image';
import Table from '@/components/tables/Table';
import { useState } from 'react';
import modifiedData from "../../data/programAdmin/accountSupport.json";
import { useRouter } from 'next/router';
import ResetPasswordOverlay from '@/components/overlays/ResetPasswordOverlay';


export default function AccountSupport() {
    const userData = useStore((state) => state.userData);
    const [searchInput, setSearchInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    // const [data, setData] = useState({
    //     name: "",
    //     username: "",
    //     resetPassword: "",
    //     viewHistory: "",
    // });

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput)
    };
    
    const router = useRouter();

    const handleView = (e) =>{
        router.push("/programAdmin/loginHistory");
    }

    const handleReset = () =>{
        // router.push("/programAdmin/resetPassword"); 
        setIsOpen(!isOpen);
    }

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Account Support</h1>
            <div>
                <input type="text" className=" w-1/2 mb-4 pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search here" onChange={handleChange} value={searchInput} />
            </div>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                Name
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Username
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Reset Password
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                View Login History
                            </th>                             
                    </tr>
                </thead>

                {
                    modifiedData.filter(post => {
                        if (searchInput === ''){
                            return post;
                        } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }else if(post.username.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }

                    }).map((post, index) => (
                        
                                <tr key={index} className=' even:bg-gray-50 group'>
                                    {/* {setData(post)} */}
                                    <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{post.name}</td>
                                    <td className='pl-4'>{post.username}</td>
                                    <td className='pl-4'><button onClick={handleReset} className="text-blue-700 ml-5">{post.resetPassword} </button></td>
                                    <td className='pl-4'><button onClick={handleView} className="text-blue-700 ml-5">{post.viewHistory} </button></td>
                                </tr>
                    ))
                }
            </table>
            {isOpen && <ResetPasswordOverlay toggleModal={setIsOpen} path={"/programAdmin/accountSupport"}
                message={"Upon clicking Confirm, a reset password email will be sent to the associated account."}/>}
            {/* <Table columnTitles={["Name", "Username", "Reset Password", "View Login History"]} rowsData={data}/> */}
        </div>
        </DefaultLayout>
    );
}