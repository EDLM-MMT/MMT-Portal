import { useRouter } from "next/router"

export default function Card({ title, description, buttonLabel, routePath }){
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${routePath}`);
    }
    return(
        <div className='bg-white w-1/4 border h-80 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='text-2xl font-semibold'>
                {title}
            </h1>
            <p className='mt-4 font-sans line-clamp-6 text-lg h-36'>
                {description}
            </p>

            <div className='flex align-bottom items-bottom justify-center mt-10'>
                <div className='inline-block align-bottom gap-2'>
                <button
                        id={'view-course-button-'}
                        className='flex justify-center text-lg items-center gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none'
                        title='view course'
                        onClick={handleClick}
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}