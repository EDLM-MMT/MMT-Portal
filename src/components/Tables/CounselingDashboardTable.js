import { useRouter } from "next/router"
import DeletePopup from '@/components/overlays/DeletePopup'
import { useState } from 'react';


export default function CounselingDashboardTable({careerList}) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [degree, setDegree] = useState('')

    const handleCareerCounseling = (event) =>{
        router.push(`/serviceMember/careerCounseling/${event}`); 
    }

    const handleDelete = (degree) =>{
        console.log("delete row")
        setDegree(degree)
        setIsOpen(true)
        console.log(degree)
    }

    return(
        <div className='mt-8'>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                            >
                                Major
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                School
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
                                Hours Still Needed
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
                                Delete
                            </th>                            
                    </tr>
                </thead>
                {careerList.map((career, index) => ( 
                            <tr key={index} className=' even:bg-gray-50 group'>
                                {/* {setData(post)} */}
                                <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{career.degree}</td>
                                <td className='pl-2'>{career.school}</td>
                                <td className='pl-2'>{career.total_creditHours}</td>
                                <td className='pl-2'>{career.total_creditHours - career.creditHours_completed}</td>
                                <td><button onClick={() => handleCareerCounseling(career.id)} className="text-blue-700 pl-2">Go To Career Counseling</button></td>
                                <td><button data-testid={"delete-button"} onClick={() => handleDelete(career.degree)} className="text-blue-700 pl-2">Delete</button></td>
                            </tr>
                ))}
            </table>
            {isOpen && <DeletePopup toggleModal={setIsOpen} message={"Are you sure you want to delete this row?"} path={"/serviceMember/careerCounseling"} degree={degree}/>}
        </div>

    )
}