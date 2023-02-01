import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import { useState } from 'react';
import DegreeAgreementsOverlay from "../overlays/DegreeAgreementsOverlay";
import AssignInquiryOverlay from "../overlays/AssignInquiryOverlay";



export default function TwoChoiceCard({ title, description, buttonLabel, viewRoutePath, className, data, card, degreeIndex, toggleModalUpdate, type }){
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
                <div className='flex flex-row justify-between'>
                    {card.title}
                    {(type === 'I') && <div className='text-lg'> Inquiry ID: {card.id}</div>}
                </div>
            </h1>
            <p className={descriptionClass}>
                {card.description}
            </p>
            
            <div className='flex flex-row align-bottom mt-5'>
                <div className= 'w-1/2'>
                    <button className='text-black bg-white hover:bg-white hover:text-black justify-center 
                        h-18 w-full align-middle pt-2 text-sm font-bold items-center border-grey border border-l-0 border-b-0 rounded-none gap-2'
                        onClick={handleClick}>
                        {card.status} 
                    </button>

                    {(isOpen && buttonLabel=== "Assign Inquiry") &&
                    (<AssignInquiryOverlay toggleModal={setIsOpen} message={"Enter email address or account name below"} />)}
                    
                    {(isOpen && buttonLabel !== "Assign Inquiry") && 
                    (<DegreeAgreementsOverlay toggleModal={setIsOpen} title={buttonLabel} toggleModalUpdate={toggleModalUpdate}
                    message={`Please confirm you want to ${buttonLabel}`} btnText={`Yes, ${buttonLabel}`}
                    data={data} card={card} degreeIndex={degreeIndex}/>)}
                    
                </div>
                <div className= 'w-1/2'>
                    <Button  className='text-black bg-white hover:bg-white hover:text-black justify-center 
                    h-18 w-full align-middle pt-2 text-sm font-bold items-center border-grey border border-r-0 border-b-0 rounded-none gap-2'

                        btnText={"View"} 
                        link={card.secondRoutePath}/>
                </div>  
            </div>
        </div>
    )
}