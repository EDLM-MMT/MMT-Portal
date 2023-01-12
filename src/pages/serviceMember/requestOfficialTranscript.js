import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import { useRouter } from "next/router"


export default function RequestOfficialTranscript() {
    const userData = useStore((state) => state.userData);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/serviceMember/transcripts`);
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4  text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Request Offical Transcript
                    </div> 
                </h1>
                <div>
                    <button onClick={handleClick}
                    className='text-dod-500 mb-3 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                    Transcript </button> -{`>`} Request Official Transcript 
                </div>
                <form className='mt-4'>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.person.firstName} required />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={userData?.learner.personnel.person.lastName} required />
                        </div>
                        <div>
                            <label for="institute_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Academic Institute Sender</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter name"} required />
                        </div>  
                        <div>
                            <label for="institute_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Academic Institute Recipient</label>
                            <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter name"} required />
                        </div>
                    </div>
                </form>
                <div className='flex my-5 justify-between'>
                    <Button btnText={"Cancel"} link={"/serviceMember/transcripts"}></Button>
                    {/* <button type="submit" class="flex justify text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Request</button> */}
                    <Button btnText={"Submit Official Transcript Request"} link={"/dashboard"}></Button>
                </div>
            </div>
        </DefaultLayout>
    );
}