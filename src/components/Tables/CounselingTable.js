import { useState } from "react";
import Checkbox from "../Checkbox";

export default function CounselingTable({coursePlan}) {

    const [checkedState, setCheckedState] = useState(
        new Array(coursePlan.length).fill(false)
    );

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

    };

    return(
        <div>
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
                                Credit Hours
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Projected Semester
                            </th>     
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Status
                            </th>                            
                    </tr>
                </thead>
                {coursePlan.map((course, index) => ( 
                            <tr key={index} className=' even:bg-gray-50 group'>
                                {/* {setData(post)} */}
                                <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>
                                    <label>
                                        {/* <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        checked={checkedState[index]}
                                        onChange={() => handleChange(index)}
                                        /> */}
                                        <Checkbox 
                                            label=""
                                            value={checkedState[index]}
                                            onChange={() => handleChange(index)}
                                            index={index}
                                        />
                                    </label></td>
                                <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{course.course_number}</td>
                                <td className='pl-4'>{course.course_name}</td>
                                <td className='pl-4'>{course.credit_hours}</td>
                                <td className='pl-4'>{course.projected_semester}</td>
                                <td className='pl-4'>{course.status}</td>
                            </tr>
                ))}
            </table>
        </div>

    )
}