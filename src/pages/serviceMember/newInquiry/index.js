import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import InquiryDropdown from '@/components/Dropdowns/InquiryDropdown';
import { useCallback, useState } from 'react';



export default function NewInquiry() {
    const userData = useStore((state) => state.userData);
    const router = useRouter();

    const solutions = [
        {
            name: "School",
            solution: "lorem ipsum confutatis maledictus"
        }
    ];
    
    const [selected, setSelected] = useState("School");
    const [commonSolution, setCommonSolution] = useState("");
    const [isNewInquiry, setNewInquiry] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const onChange = useCallback((e) => {
        setSelected(e.target.name);
        solutions.map((post,index)=>{
            if(post.name === selected){
                setCommonSolution(post.solution);
            }
        })
    }, [userData])

    const handleClick = () => {
        router.push(`/serviceMember/inquiries`);
    }
    const handleInquiry = () => {
        setNewInquiry(!isNewInquiry);
    }

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const handleSubmission = () => {
	};


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
                    Inquiries </button> -{`>`} Start New Inquiry 
                </div>
                <form className='mt-4'>
                    <div class="grid gap-6 mb-6 md:grid-rows-2">
                        <div>
                            <label for="inquiry_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Issue</label>
                            <InquiryDropdown options={["School", "Major", "MOS Code"]} keyName={"issueFilter"} initialValue={"Type of Issues"} onChange={onChange} />
                        </div>
                        <div>
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Common Solution</label>
                            {commonSolution}
                        </div>  
                    </div>
                </form>
                <div className='flex my-5 justify-center'>
                    <Button btnText={"This Solved my Issue"} link={"/serviceMember/inquiries"} className='mr-4 bg-green-700'></Button> or
                    <button onClick={handleInquiry}
                    className='text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-4 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>                    
                    I still need asssitance </button> 
                </div>
                <div>
                    {isNewInquiry &&
                        <div>
                           <div className='flex flex-col mb-4'>
                                <label for="email_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email (Optional):</label>
                                <input type="text-area" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter Email Address"}  />
                                
                                <label for="phone" class="block mb-2 text-sm font-medium mt-4 text-gray-900 dark:text-white">Phone (Optional):</label>
                                <input type="text-area" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter Phone "} />
                           
                                <label for="subject" class="block mb-2 text-sm font-medium mt-4 text-gray-900 dark:text-white">Subject</label>
                                <input type="text-area" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter Subject"} required />

                                <label for="description" class="block mb-2 text-sm font-medium mt-4 text-gray-900 dark:text-white">Description</label>
                                <input type="text-area" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Enter Description"} required /> 
                                
                                <div className='flex flex-row'>
                                    <label for="attachment" class="block mb-2 text-sm font-medium mt-4 mr-8 text-gray-900 dark:text-white">Add attachments</label>
                                    <input class="block mb-2 text-sm font-small mt-4 text-gray-900 dark:text-white" type="file" name="file" onChange={changeHandler} />
                                </div>
                                <div className='justify-center text-center'>
                                    <p>Please attach any relevant file here. <b>Maximum size is 2 MB.</b></p>
                                </div>
                                {/* {isFilePicked ? (
                                    <div>
                                        <p>Filename: {selectedFile.name}</p>
                                        <p>Filetype: {selectedFile.type}</p>
                                        <p>Size in bytes: {selectedFile.size}</p>
                                        <p>
                                            lastModifiedDate:{' '}
                                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                                        </p>
                                    </div>
                                ) : (
                                    <p>Select a file to show details</p>
                                )} */}
                                {/* <div>
                                    <button onClick={handleSubmission}>Submit</button>
                                </div>          */}
                            </div>
                            <div className='flex flex-row my-5 justify-center'>
                                <Button btnText={"Cancel"} link={"/serviceMember/inquiries"} className='mr-64'></Button>
                                {/* <button type="submit" class="flex justify text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Request</button> */}
                                <Button btnText={"Submit Inquiry"} link={"/dashboard"} className='ml-64'></Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </DefaultLayout>
    );
}