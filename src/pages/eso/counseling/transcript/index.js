import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import DownloadButton from "@/components/buttons/DownloadButton";
import Button from '@/components/buttons/Button';

export default function TranscriptView() {
    const userData = useStore((state) => state.userData);
    let link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample_ComboTranscript.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLWVhc3QtMSJIMEYCIQCvxdidpBmEt7Iaz4ZFAta6cQ9AFtHhv1I5dzCKdQON8wIhAJMK1uG9F%2F4H7BpWVcDazhC6JkFOKgtotsXHmRQ1QNsOKq8DCC8QAxoMOTU1MDM4NTgwMTY3IgzUBL%2B9EwBh40MOZ7gqjAMrQss966l9F1wrDo8K4Xv6ahIx1t9LTRtKC4wWKCtIxQr1ZmgG93ujgoctFr3hOFbaHI9Z0sKOHpvmy22pQOPA2juF9xwp3PXLjuldZZoQWHwPHn%2B7VP3jof9rJNnUB4H2m1DjU13VCh%2Bu2tD7fJM0s8CKO%2Bi727XkHogTvEVTrb1L5u3ckDONCXicSXu4GvesY74RgD4HfWUU05BkAIDUApmMPOsiEyVLoSZ9%2Bft5ElYN3zrQLOWwxG4MTpAB4SMYrcSp4wmdhnE%2FHACNNEKbr7URiF3FkPhA%2B4NAeX5rHGZ5IVk%2Bk7JR0n%2B5JEtZGcT8qK%2F9E1%2B2jSly2GX2bLdXK%2BBHQb8Bxb4CrFwv8gvRdnw1JaY2%2Fbog2KRDsIHw23FWBoccDt%2BjjFHwRPWTIrq83rnE2natJ%2FOaEoNBO7sjdBAkjCeZ2mFU6TLahAq%2Bkd5yYNIBmoazvLOakfoctM9ftqTz%2FTAVyNkjz7M7RlnZ1F9GvMt1hRKA2nNwYI6vkALfArNL%2F8flT4yh2bAwmtnopgY6iwI9R9Gz%2FilWpWTLZnJ8nJPaa2JRgFOYWtjjyyba%2FM45PNwBqa1QnJqOPArH3XAWdqSJjechLNwVRcOayXwgzjU1hMyFS1tFNCBnNsITL1dKthE2TowOmZti%2FWeoEo2wghSGPaOKHrHOmEQ4Ts8dfvTcpO8kCqpCkoxn0dbfLSVQ%2Bo00x0WRmLlY2zOhXHqlqPaBH1SZumJM%2BWQMoH%2B%2BHVHG5v6TUzHuGlwEg3bwTOsalDQzyIbclVDxGQh%2FVCDpkMLCfvTxHrAIjZPJfMSmNc%2Bzy8yUZREyuNvK1PzItiBIDlTDKe%2FuQaV0PbJFWopBdhnLZ72PsI6rc7E4eTMeBNVTbBTFIj3OCmCjxnI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230814T134807Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIA54XF4HXDVTFODRG7%2F20230814%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=f36d160b616209df94e3f2541a4f07672558377dd20faa60144149b3f1532e5c";
    let downloadLink = 'Smith,John_SAMPLE_TRANSCRIPT.pdf';

    const router = useRouter();
    const handleClick = () => {
        router.push('/eso/counseling');
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-2 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Unofficial Transcript
                    </div> 
                </h1>
            <div>
                <button onClick={handleClick}
                className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                Counseling Dashboard </button> -{`>`} Unofficial Transcript 
            </div>

            <div className="m-4 bg-gray-200 h-screen text-center">
                <object data={link}
                    type="application/pdf" width="100%" height="100%">
                    PDF Viewer
                </object>
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <Button btnText={"Return to Counseling Dashboard"} link={"/eso/counseling"}></Button>
                <DownloadButton link={downloadLink}/>
            </div>
        </div>
        </DefaultLayout>
    );
}