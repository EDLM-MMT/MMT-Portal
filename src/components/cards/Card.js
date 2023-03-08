import { useRouter } from "next/router"
import Image from "next/image";

export default function Card({ title, description, buttonLabel, cardImage, routePath, children }){
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${routePath}`);
    }
    return(
        <div className='bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-10'>
            <h1 className='flex text-xl font-semibold h-14 items-center justify-center align-middle border-b'>
                {title}
            </h1>
            <div className="flex h-48">
                <Image src={cardImage} alt={'home'} />
            </div>
            <p className='flex px-6 pt-3 mt-4 font-sans line-clamp-6 text-center align-middle justify-center'>
                {description}
            </p>
            {children}
            {buttonLabel &&
            <div className='flex align-bottom items-bottom justify-center mt-10 mx-5'>
                <div className='inline-block align-bottom gap-2'>
                    <button
                        id={'view-course-button-'}
                        className='flex justify-center items-center gap-2 dod-500 w-56 rounded-lg hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none'
                        title='view course'
                        onClick={handleClick}
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
            }
        </div>
    )
}