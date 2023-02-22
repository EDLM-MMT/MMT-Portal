import { useRouter } from "next/router";
import { useState } from 'react';


export default function CounselingTable(careerList) {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState("");


    const handleView = (e) =>{
        router.push("/eso/careerCounseling/transcript");
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput)
    };

    return(
        <div>
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
                            </th> 
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
                                MOS Code
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Career Counseling
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Unofficial Transscript
                            </th>                          
                    </tr>
                </thead>
                {/* {(careerList.careerArray.map((student, index) => (
                    <tr key={index} className=' even:bg-gray-50 group'>
                        <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'></td>
                        <td className='pl-4'>{student.name}</td>
                        <td className='pl-4'>{student.mos_code}</td>
                        {(student.career_counseling.map((career) => (
                            <tr className='pl-4'><button>{career}</button></tr>
                        )))}
                        <td className='pl-4'><button onClick={handleView}>View</button></td>
                    </tr>
                )))} */}

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
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'></td>
                            <td className='pl-4'>{student.name}</td>
                            <td className='pl-4'>{student.mos_code}</td>
                            {(student.career_counseling.map((career) => (
                                <tr className='pl-4 text-blue-600 font-bold'><button>{career}</button></tr>
                            )))}
                            <td className='pl-4 text-blue-600 text-bold font-bold'><button onClick={handleView}>View</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}