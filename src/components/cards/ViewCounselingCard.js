import { twMerge } from "tailwind-merge";

export default function ViewCounselingCard({ title, school, startDate, endDate, assignedESO, serviceMember, totalHours, completedHours, className }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    return(
        <div className='bg-white w-full border h-50 pb-4 mb-1 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='text-xl font-semibold h-10 border-b'>
                Overview
            </h1>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    School: {school}
                </p>
                {assignedESO &&
                <p className={descriptionClass}>
                    Assigned ESO: {assignedESO}
                </p>
                }
                {serviceMember &&
                <p className={descriptionClass}>
                    Service Member: {serviceMember}
                </p>
                }
                <p className={descriptionClass}>
                    Degree Start Date: {startDate}
                </p>
            </div>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Total Credit Hours: {totalHours}
                </p>
                <p className={descriptionClass}>
                    Hours Still Needed: {totalHours - completedHours}
                </p>
            </div>
        </div>
        
    )
}