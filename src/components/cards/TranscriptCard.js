import { useRouter } from "next/router"
import DownloadButton from "@/components/buttons/DownloadButton";
import Button from "../buttons/Button";
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState } from "react";
import fooFile from '../../assets/PRICHARD_GREGORY_ComboTranscript.pdf'

export default function TranscriptCard({ title, routePath, type}){
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [file, setFile] = useState(null);
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${routePath}`);
    }

    const allowedFiles = ['application/pdf'];
    const onFileChange= (event) => {
        let selectedFile = event.target.files[0];
        if(selectedFile){
            if(selectedFile&&allowedFiles.includes(selectedFile.type)){
              let reader = new FileReader();
              reader.readAsDataURL(selectedFile);
              reader.onloadend=(event)=>{
               // setPdfError('');
                setFile(event.target.result);
              }
            }
        }
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
            <div>
                <label htmlFor="file">Load from file:</label>{' '}
                <input onChange={onFileChange} type="file" />
            </div>

            <div className="m-4 bg-gray-200 h-screen text-center">
                {file &&(
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                    { <Viewer fileUrl={file} /*plugins={[defaultLayoutPluginInstance]}*/ /> }
                    </Worker> 
                )} 
                {!file &&(
                    <>No PDF file is selected yet</>
                )}     
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <Button btnText={"Return to Transcript Page"} link={"/serviceMember/transcripts"}></Button>
                <DownloadButton/>
            </div>
        </div>
    )
}