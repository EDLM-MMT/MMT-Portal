import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";
import { useRouter } from "next/router"

export default function Card({ title, description, buttonLabel, routePath, children, user }){
    const router = useRouter();

    const handleClick = (title) => {
        const context = {
            actor: {
              first_name: user?.user?.first_name || 'Anonymous',
              last_name: user?.user?.last_name || 'User',
            },
            verb: {
              id: 'https://w3id.org/xapi/acrossx/verbs/searched',
              display: `viewed ${title}`,
            },
            object: {
              definitionName: 'JST Pages Viewed',
            },
            // resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
            // resultExtValue: title,
          };
          xAPISendStatement(context);
        router.push(`/${routePath}`);
    }
    return(
        <div className='bg-white w-1/4 border h-80 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='text-xl font-semibold h-10'>
                {title}
            </h1>
            <p className='mt-4 font-sans line-clamp-6 h-36'>
                {description}
            </p>
            {children}
            {buttonLabel &&
            <div className='flex align-bottom items-bottom justify-center mt-10'>
                <div className='inline-block align-bottom gap-2'>
                    <button
                        id={'view-course-button-'}
                        className='flex justify-center items-center gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none'
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