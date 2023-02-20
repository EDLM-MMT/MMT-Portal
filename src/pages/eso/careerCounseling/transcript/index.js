import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import DownloadButton from "@/components/buttons/DownloadButton";
import Button from '@/components/buttons/Button';

export default function TranscriptView() {
    const userData = useStore((state) => state.userData);
    let link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample_ComboTranscript.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGR5kNYIHeceqZe%2FHfOUR%2BJBTcyBC%2Fmt3qBmg6f6LA0YAiBtLUqdpFWsPUtK04YRgv1DIvnUyoY6PG3Q2v8Y%2FZ67yiq4Awj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDk1NTAzODU4MDE2NyIMETgJBBoZ5m0v5jdEKowDe6%2BTx2D8SEm23WtjXpjhWSHCPCtJQnhEoPdrfUMJYfuaGUGHTshVGtk4AIyghCj78hA6AXiTAYLCedQS0LVFacdsy22Uz5aeudnM03SgnpoUCiL46lVKoTrSsOlTZ8zI%2Fky0BP%2BOoD2XSwBJ5djWMZjG0SjSJ7Q61zae4fh66GkwDR0b72Q0oJt0Y0%2FNrd2y6XQGXRf7i4ueMovXqeeFqpV0%2FbXk9FXoTUcWclaaSlE84069yY9zl43dNoNcyaqIN%2FkMyoPdBpfM46t9OcydZtDUHAZFDy6lOU7S0FeHDhx8yroXRRJFcGnNu%2FzAjvVHA%2B69Rr2hQKupd9Bw30v3RpLaJTgUk7a7pjeYohsMuDB7dxwaINlizo4%2FgyUpeDa6MaF6H3Gll5IfdWR205HrEd0brmYPKkSCa7sXWZMdzE4SsbudQRI20C5OB8IUbSLDfMClP%2FWe1lDwCwQSGXqcoqL6lys2bP0B3o%2Fuj3Tvo1TZrciMQDSb9gyDjSe17og1GTwCY858yDfJsuymMJuEwZ4GOo0CNvNeebKuFt44tS0ncDY8b2wBr6aJS2c%2BV%2FIv8vRbbEmqrjjibfF6qHW5j5q054RPdioSryZnRnt6iFamo2TlKrIZPqIlAYTfLYJSDkiaZpGNDzZIXkSowra4PKocS0g1AjdOurtOphT%2FvYKRPD46rX9Y2tb3E5ktO%2BnXHn%2BAtDW89CEvC6DYYPM8nojD43JLJcENXXFKh%2FjgogxD5ouvgvEJ1FitA8S7%2BoNOG904uXTI8v%2FN7dkQzBw%2FYzaZrETHxPd8SeBvZp%2FLg54zoKOneQn4ubirFlMZ1%2BLR2QsXS%2FoELjM6gh6LD%2B1E%2FaPzDWPcNfc%2FU5RTeI3D8drtoLZzV1Y%2FOoeby2q0q40CnLI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T221436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=ASIA54XF4HXDWJO2CYO6%2F20230124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=7318b0705020c5a63d75d34e06c3bc7d6468d922f843ad561fa20e097aed7dff";

    const router = useRouter();
    const handleClick = () => {
        router.push('/eso/careerCounseling');
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-2 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Complete Transcript
                    </div> 
                </h1>
            <div>
                <button onClick={handleClick}
                className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                Career Counseling Dashbaord </button> -{`>`} Complete Transcript 
            </div>

            <div className="m-4 bg-gray-200 h-screen text-center">
                <object data={link}
                    type="application/pdf" width="100%" height="100%">
                    PDF Viewer
                </object>
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <Button btnText={"Return to Career Counseling Dashboard"} link={"/eso/careerCounseling"}></Button>
                <DownloadButton/>
            </div>
        </div>
        </DefaultLayout>
    );
}