import { useRouter } from "next/router";
import { useState } from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';


export default function CounselingTable(careerList) {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState("");
    const [selected, setSelected] = useState("Student Name");



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
    }

    const sort = () => {
        if (selected === "Student Name"){
            const filtered = careerList.careerArray.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
    
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        }
        else if (selected === "Most Recent"){
            const filtered = majorsList.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        } 
    }

    return(
        <div>
            <div className='flex align-middle'>
                <input type="text" className=" w-1/2 mb-4 pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search Service Member Name" onChange={handleChange} value={searchInput} />
                <div className='p-2 font-medium'> Sort By: </div> 
                <Dropdown options={["Student Name", "Most Recent"]} keyName={"Student Filter"} initialValue={"Student Name"} onChange={onChange} />
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
                            <td className='pl-12'>{student.mos_code}</td>
                            {(student.career_counseling.map((career) => (
                                <tr className='pl-4 text-blue-600 font-medium'><button onClick={() => handleCareerClick(career.id)}>{career.major}</button></tr>
                            )))}
                            <td className='pl-0 text-blue-600 font-medium'><button onClick={handleView}>View</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
} 