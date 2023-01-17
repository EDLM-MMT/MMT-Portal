import { useRouter } from "next/router"
import DownloadButton from "@/components/buttons/DownloadButton";
import Button from "../buttons/Button";

export default function TranscriptCard({ title, routePath, type}){
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${routePath}`);
    }

    return(
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pb-4 border-b mb-2 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        {title}
                        <Button btnText={"Request Official Transcript"} link={"/serviceMember/requestOfficialTranscript"}></Button>
                    </div> 
            </h1>
            <div>
                <button onClick={handleClick}
                className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                Transcript </button> -{`>`} {type} Transcript 
            </div>

            <div className="m-4 bg-gray-200 h-screen text-center">
                <object data={"https://www.africau.edu/images/default/sample.pdf"} type="application/pdf" width="100%" height="100%">
                    test
                </object>
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <Button btnText={"Return to Transcript Page"} link={"/serviceMember/transcripts"}></Button>
                <DownloadButton/>
            </div>
        </div>
    )
}