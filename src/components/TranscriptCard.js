import { useRouter } from "next/router"
import DownloadButton from "./DownloadButton";
import ViewBtn from "./ViewBtn";

export default function TranscriptCard({ title, description, type}){
    const router = useRouter();

    return(
        <div className='bg-white w-1/3 border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='text-2xl font-semibold'>
                {title}
            </h1>
            <p className='mt-4 font-sans line-clamp-6 text-lg'>
                {description}
            </p>

            <div className="m-4 bg-gray-200 h-80 text-center">
                Transcript Viewer
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <ViewBtn transcriptType={type}/>
                <DownloadButton/>
            </div>
        </div>
    )
}