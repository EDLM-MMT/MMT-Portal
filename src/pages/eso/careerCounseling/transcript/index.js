import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import DownloadButton from "@/components/buttons/DownloadButton";
import Button from '@/components/buttons/Button';

export default function TranscriptView() {
    const userData = useStore((state) => state.userData);
    let link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample_ComboTranscript.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIH5qvdfra3tivcqm9Nv%2FIVJIMGEJQjFva8tymjSnvHgcAiEA3b%2BSdIoUDvJbxj4sLVG8WW0SSo82Q8lQZha5zckW88wquAMIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5NTUwMzg1ODAxNjciDNKTj9vS8Ey9GZ%2FU%2BiqMAzTXOvUSoe6jYcW2Md3HJkS4M4LZc1UVGCbaiD2L9PMAv4wmq9kKcwq8atkDduJcx4ZmBbOlg6N6Bh8mCTikooxXOLYTw%2BJcSNOR1S2In6SaGmxmO3yK321%2F%2Fe1sHHxfcMsvGCM02t9FzKz9mWUAe9xGdfQyNNCekWeC7EIcMbgM4zSZYLSk%2Bkuhses%2BCOQKrjDt8LIbfuCZUIqHb6akdvDcWvjqKaXgLalPxAybBFmZysUYTBZdc0IKVIsBrW%2BdUpwLVbyv5ztEl%2FFtsZjus5GEeXZlDPLRl6NsktXT%2FsySyBSUtsNeoNCg0BzW4VCgG6jmy2Y9zfFwpddeAPpaD1S7bmr3%2BEWem1lX%2BSk4yMNq3B4PJVfGK0cicTyx3v9ESdNHh1LzmgNA%2FNkdMuKqFJr7fEXwpkPjF3LmTGuHhdRM5Tyb3wbXHjSnfS2vUFQEuCPjO9DrtUlT71qcbQIultV1sP1xjhAYMV5JBOR%2BkxJX4XK51wkQ696Oqx8zCopZs08q9hnT22K0j6OlgjDvg%2BygBjqMAj5Dp%2FHMg8B6Pq8Qurin2lCZaalsfG%2FjpMwBTmt%2BOM4AMuoMpVOMY9EFk6qV%2BXuc64sem%2BsAFWe4cXZGGX25%2BZW5tlpz8vWW%2B2e1YHgN96uTb5F7%2BTz6JVJxk5EgJNhA6WSB%2FpmR7ht2Xlqp%2FAJMlltuw0hp0YLVX53HYmWzGQpOEUD71LEV2yAWm8kmW6z6VgAazjZVnwoPU%2B9ZSTV6XsW0xQg6V%2F38TDWJxJW3Q7%2FfZQQ0E%2F%2BGS6EXkUiKtVcjwkzcTlsAf1zQH01mYfKyQUKydi31Zw3osIDGVKy2vLcbdHW9LYqLEWw9XBJKJ%2FOWDmQFcG%2B4I%2FOi8FOUdK8vHa954RWo2goRkT6UwVc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230322T132910Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA54XF4HXDSFS3CMNX%2F20230322%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=9f2635797c4ec11634193c0c80a62600e486292bd1c9f158b65387d85f01f489";
    let downloadLink = 'PRICHARD_GREGORY_ComboTranscript.pdf';

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
                Career Counseling Dashboard </button> -{`>`} Complete Transcript 
            </div>

            <div className="m-4 bg-gray-200 h-screen text-center">
                <object data={link}
                    type="application/pdf" width="100%" height="100%">
                    PDF Viewer
                </object>
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <Button btnText={"Return to Career Counseling Dashboard"} link={"/eso/careerCounseling"}></Button>
                <DownloadButton link={downloadLink}/>
            </div>
        </div>
        </DefaultLayout>
    );
}