import { useRouter } from "next/router"
import DeletePopup from '@/components/overlays/DeletePopup'
import { useState, useEffect } from 'react';


export default function CreditsTable({credits}) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [degree, setDegree] = useState([]);

    // useEffect(() => {
    //     setDegree(careerList)
    // }, [careerList]);

    const handleCareerCounseling = (event) =>{
        router.push(`/serviceMember/counseling/${event}`); 
    }

    const handleDelete = (degreeIndex, e) =>{
        console.log("delete row")
        setDegree(degree.filter((degree,i) => i !== degreeIndex));
        setIsOpen(true)
        console.log(degree)
    }

    return(
        <div className='mt-4'>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                            >
                                Course Number
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                Course Name
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Course Category
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Required Hours
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Potential Cedit (Hours)
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Hours Still Needed
                            </th>                        
                    </tr>
                </thead>
                {credits?.map((credit, index) => ( 
                    <tr key={index} className=' even:bg-gray-50 group'>
                        {/* {setData(post)} */}
                        <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{credit.courseNumber}</td>
                        <td className='pl-2'>{credit.courseName}</td>
                        <td className='pl-2'>{credit.coursesCatagory}</td>
                        <td className='pl-14'>{credit.reqHours}</td>
                        <td className='pl-16'>{credit.potentialCredit}</td>
                        <td className='pl-16'>{credit.hoursNeeded}</td>
                    </tr>
                ))}
            </table>
        </div>

    )
}