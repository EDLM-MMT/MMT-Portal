import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import { useState } from 'react';

export default function ViewCard({ title, description, className, inquiryStatus }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold h-10'>
                {title}
                <button className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-gray-900 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none" disabled>Status: {inquiryStatus}</button>

            </h1>
            <p className={descriptionClass}>
                {description}
            </p>

        </div>
        
    )
}