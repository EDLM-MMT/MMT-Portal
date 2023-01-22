import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import { useState } from 'react';

export default function ViewCard({ title, description, className }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    return(
        <div className='bg-white w-full border h-50 rounded-md border-gray-200 p-4 pb-0 shadow'>
            <h1 className='text-xl font-semibold h-10'>
                {title}
            </h1>
            <p className={descriptionClass}>
                {description}
            </p>

        </div>
        
    )
}