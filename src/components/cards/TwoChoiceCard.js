import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router"
import Button from "../buttons/Button";

export default function TwoChoiceCard({ title, description, buttonLabel, firstRoutePath, viewRoutePath, className }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${routePath}`);
    }
    return(
        <div className='bg-white w-full border h-50 rounded-md border-gray-200 p-4 pb-0 shadow'>
            <h1 className='text-xl font-semibold h-10'>
                {title}
            </h1>
            <p className={descriptionClass}>
                {description}
            </p>
            {buttonLabel &&
            <div className='flex flex-row align-bottom mt-5'>
                <div className= 'w-1/2'>
                    <Button 
                        className='text-black bg-white hover:bg-white hover:text-black justify-center 
                        h-18
                        text-sm 
                        font-bold
                        items-center
                        border-grey
                        border
                        border-l-0
                        border-b-0
                        rounded-none 
                        gap-2 '
                        btnText={buttonLabel} 
                        link={firstRoutePath}/>
                </div>
                <div className= 'w-1/2'>
                    <Button  className='text-black bg-white hover:bg-white hover:text-black justify-center 
                        text-sm 
                        font-bold
                        items-center
                        border-grey
                        border
                        border-r-0
                        border-b-0
                        rounded-none 
                        gap-2 '
                        btnText={"View"} 
                        link={viewRoutePath}/>
                </div>  
            </div>
            }
        </div>
    )
}