import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import { useRouter } from "next/router"


export default function NewInquiry() {
    const userData = useStore((state) => state.userData);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/serviceMember/inquiries`);
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4  text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        New Inquiry
                    </div> 
                </h1>
                <div>
                    <button onClick={handleClick}
                    className='text-dod-500 mb-3 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                    My Inquiries </button> -{`>`} Start New Inquiry 
                </div>
                <form className='mt-4'>
                    <div class="grid gap-6 mb-6 md:grid-rows-2">
                        <div>
                            <label for="inquiry_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Inquiry Title</label>
                            <input type="text" id="inquiry_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter Inquiry Title"} required />
                        </div>
                        <div>
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input type="text-area" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter Description"} required />
                        </div>  
                    </div>
                </form>
                <div className='flex my-5 justify-between'>
                    <Button btnText={"Cancel"} link={"/serviceMember/inquiries"}></Button>
                    {/* <button type="submit" class="flex justify text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Request</button> */}
                    <Button btnText={"Submit Inquiry"} link={"/dashboard"}></Button>
                </div>
            </div>
        </DefaultLayout>
    );
}