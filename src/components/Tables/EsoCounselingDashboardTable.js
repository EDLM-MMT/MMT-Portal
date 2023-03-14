import { useRouter } from "next/router";
import { useState } from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';


export default function CounselingTable(careerList) {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState("");
    const [selected, setSelected] = useState("");

    const handleView = (e) =>{
        router.push("/eso/careerCounseling/transcript");
    }

    const handleCareerClick = (e) =>{
        router.push(`/eso/careerCounseling/${e}`);
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onChange = (e) => {
        setSelected(e.target.name);
        if(e.target.name === "Student Name"){
            careerListNameSort()
        } else {
            careerListIDSort()
        }
    }

    const careerListNameSort = () => {
        let newArray = careerList.careerArray.sort(function(a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
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

    const careerListIDSort = () => {
        let newArray = careerList.careerArray.sort(function(a, b) {
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

    // ISSUE
    // Sort functionality is running but only when selecting the "Most Recent" dropdown option. I have tested the sort func alone, and after it runs
    // it does not automatically rearrange the table below it
    // I cannot understand why the table only rearranges when the Most Recent option is selected

    // Right now, the second selection rearranges the table, idk why
    // Also using the search bar after 1 selection and then deleting the text in the search bar rearranges the table, maybe something similiar to preventDefault?

    return(
        <div>

            <div className='flex align-middle justify-between'>
                <input type="text" className=" w-1/2 mb-6 pl-4  bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search Service Member Name" onChange={handleChange} value={searchInput} />
                <div className='flex flex-row align-middle'>
                    <div className='p-2 font-medium'> Sort By: </div> 
                    <Dropdown options={["Student Name", "Most Recent"]} keyName={"Student Filter"} initialValue={"Most Recent"} onChange={onChange} />
                </div>
            </div>
            
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-4 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                Name
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-4 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                MOS Code
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-0 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Career Counseling
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-0 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Unofficial Transscript
                            </th>                          
                    </tr>
                </thead>
                {
                    careerList.careerArray.filter(post => {
                        if (searchInput === ''){
                            return post;
                        } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        } else if(post.mos_code.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }

                    }).map((student, index) => (
                        <tr key={index} className=' even:bg-gray-50 group'>
                            <td className='pl-4 p-2 text-left'>{student.name}</td>
                            <td className='pl-10'>{student.mos_code}</td>
                            {(student.career_counseling.map((career) => (
                                <tr className='pl-4 text-blue-600 font-medium'><button onClick={() => handleCareerClick(career.id)}>{career.major}</button></tr>
                            )))}
                            <td className='pl-16 text-blue-600 font-medium'><button onClick={handleView}>View</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
} 