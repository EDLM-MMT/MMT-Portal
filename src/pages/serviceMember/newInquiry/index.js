import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useRouter } from "next/router"
import InquiryDropdown from '@/components/dropdowns/InquiryDropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function NewInquiry() {
    const router = useRouter();
    const [issuesList, setIssuesList] = useState([]);

    useEffect(() => {
        axios
          .get(`/api/commonIssues`)
          .then((res) => {
            setIssuesList(res.data.common_issues);
          })
          .catch((err) => {
            console.log(err);
          });

    }, []);

    const issues = [
        "How do I view and print my student copy/unofficial transcript?",
        "Academic Institution Courses",
        "How do I request an official transcript?",
        "How do I start counseling?",
        "Other"
    ];
    
    const [commonSolution, setCommonSolution] = useState("");
    const [isNewInquiry, setNewInquiry] = useState(false);
    // const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

    const onChange = (e) => {
        issuesList.map((post, index)=>{
            if(post.issue === e.target.name){
                setCommonSolution(post.solution);
            }
        })
    }

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

    // const handleSubmission = () => {
	// };

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
                <div>
                    <div>
                        <label for="inquiry_title" class="flex mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Type of Issue</label>
                        <InquiryDropdown options={issues} keyName={"Inquiries"} initialValue={"Type of Issues"} onChange={onChange} />
                    </div>
                    <div class="w-5/6">
                        <label for="description" class="flex text-sm mb-2 mt-4 font-medium text-gray-900 dark:text-white">Common Solution</label>
                        {commonSolution}
                    </div>  
                </div>
                <div className='flex my-5 justify-center'>
                    <Button btnText={"This Solved my Issue"} link={"/serviceMember/inquiries"} className='bg-green-700'></Button> 
                    <div className="ml-4 mr-4 mt-2">
                        or
                    </div>
                    <button onClick={handleInquiry}
                    className='text-white bg-dod-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>                    
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
                            <div className='flex flex-row my-5 w-5/6 justify-between'>
                                <Button btnText={"Cancel"} link={"/serviceMember/inquiries"} ></Button>
                                {/* <button type="submit" class="flex justify text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Request</button> */}
                                <Button btnText={"Submit Inquiry"} link={"/dashboard"}></Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </DefaultLayout>
    );
}