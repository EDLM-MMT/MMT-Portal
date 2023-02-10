import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import { useState } from 'react';

export default function ViewCounselingCard({ title, school, startDate, endDate, assignedESO, totalHours, completedHours, className }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='text-xl font-semibold h-10'>
                {title}
            </h1>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    School: {school}
                </p>
                <p className={descriptionClass}>
                    Assigned ESO: {assignedESO}
                </p>
            </div>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Degree Start Date: {startDate}
                </p>
                <p className={descriptionClass}>
                    Total Credit Hours: {totalHours}
                </p>
            </div>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Projected Graduation Date: {endDate}
                </p>
                <p className={descriptionClass}>
                    Credit Hours completed: {completedHours}
                </p>
            </div>
        </div>
        
    )
}