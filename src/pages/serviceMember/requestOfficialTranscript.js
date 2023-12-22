import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/tables/TranscriptRequestTable';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";
import axios from 'axios';
import { useState, useEffect } from 'react';
import GeneralPurposeOverlay from '@/components/overlays/GeneralPurposeOverlay';


export default function RequestOfficialTranscript() {
    const userData = useStore((state) => state.userData);
    const [transcriptList, setTranscriptList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();
    const currDate = new Date().toDateString();
    const currTime = new Date().toLocaleTimeString();
    const timestamp = `${currDate}  ${currTime}`;

    const newArray = [];

    useEffect(() => {
        axios
          .get(`/api/transcriptRequest`)
          .then((res) => {
            //console.log("res:", res)
            let data = res.data.transcriptRequest
            console.log("data:", data)
            for(let x in data){
                console.log("x: ", data[x].school)
                newArray.push(data[x].requestedDate);
                newArray.push(data[x].school);
                newArray.push(data[x].deliveryMethod);
                newArray.push(data[x].requestStatus);
                newArray.push(data[x].schoolId);
                newArray.push(data[x].dateViewed);
                newArray.push(data[x].orgSchoolPoc);
                const newTranscript = newArray;

                //setTranscriptList(transcriptList =>[...transcriptList, newTranscript]);
            }
            setTranscriptList(data);
          })
          .catch((err) => {
            console.log(err);
          });

    },[]);

    console.log("transcript list:", transcriptList)


    const handleClick = () => {
        router.push(`/serviceMember/transcripts`);
    }

    const data = [
        ["01/22/2023 15:14 PM", "American Military Univeristy", "On-Line Delivery", "In Progress", "9288", "01/25/2023", "kevin"],
        ["01/21/2023 14:32 PM", "Columbia University", "On-Line Delivery", "Completed", "4567", "01/23/2023", "john"],
        ["01/18/2023 15:14 PM", "University of Florida", "On-Line Delivery", "Translated", "2814", "01/20/2023", "kelly"],

    ]

    const handleSendClick = (e) => {
        const context = {
            actor: {
              first_name: userData?.user?.first_name || 'Anonymous',
              last_name: userData?.user?.last_name || 'User',
            },
            verb: {
              id: "http://example.org/verb/requested",
              display: `Requested Official Transcript`,
            },
            object: {
                definitionName: `Requested Official Transcript`,
            },
            resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
            resultExtValue: "test",
        };
        xAPISendStatement(context);
        console.log("sent");
        setIsOpen(!isOpen);
        if(!isOpen){
            //console.log("e: ", e)
            e.preventDefault();
            const min = 1304;
            const max = 9404;
            const randId = parseInt(min + Math.random() * (max - min));
            const newtranscriptRequest = {
                requestedDate: timestamp,
                school: e.target.instituteName?.value,
                deliveryMethod: "On-line Delivery",
                requestStatus: "Started",
                schoolId: randId,
                dateViewed: "12/31/2025",
                orgSchoolPoc: "Mark",
            }
            setTranscriptList(transcriptList =>[...transcriptList, newtranscriptRequest]);
            
            axios.post('/api/transcriptRequest', {body: newtranscriptRequest}).then((response) => {
                console.log(response.status, response.data);
                if (response.status === 200){
                    router.push(`/serviceMember/requestOfficialTranscript`);
                }
                console.log("new transcript list:", transcriptList)
                //console.log("degree list inside axios post: ", degree)          
            });
        }
        //router.push(`/requestOffic`);
    }

    const postRequest = (e) => {
        console.log("e: ". e)
        e.preventDefault();
        const min = 1304;
        const max = 9404;
        const randId = parseInt(min + Math.random() * (max - min));
        const newtranscriptRequest = {
            requestedDate: timestamp,
            school: e.target.subject?.value,
            deliveryMethod: "On-line Delivery",
            requestStatus: "Started",
            schoolId: randId,
            dateViewed: "12/31/2025",
            orgSchoolPoc: "Mark",
        }
        //setTranscriptList(transcriptList =>[...transcriptList, newtranscriptRequest]);
        
        axios.post('/api/inquiry', {body: newInquiry}).then((response) => {
            console.log(response.status, response.data);
            if (response.status === 200){
                handleClick();
            }
            console.log("transcript list:", transcriptList)
            //console.log("degree list inside axios post: ", degree)          
        });
        //e.target.reset();

	};


    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4  text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Official Transcript
                    </div> 
                </h1>
                <div>
                    <button onClick={handleClick}
                    className='text-dod-500 mb-3 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                    My Transcripts </button> -{`>`} Official Transcript 
                </div>
                <form onSubmit={handleSendClick}>
                    <div className='flex flex-col p-4 gap-2 mt-4 bg-gray-100'>
                        <div>
                            <div className=' flex flex-col font-bold'>
                                Person: {userData?.learner.personnel.person.name}
                            </div>
                            <div className=' flex flex-col font-bold'>
                                Delivery Mode: On-Line Delivery
                            </div>
                            <div className='mt-3'>

                                <label for="instituteName" class="block mb-2 text-sm font-medium">Enter Academic Institute </label>
                                <input type="text" id="instituteName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={"Institute name"} required />
                            </div>  
                            <div className='mt-3 flex flex-col font-medium'>
                                By pressing the "Send Transcript" button below, I give my consent to release my transcript to the institute selected above.
                            </div>

                        </div>
                        <div className='flex my-5 justify-between'>
                            <Button btnText={"Cancel"} link={"/serviceMember/transcripts"}></Button>
                            <button type="submit"
                                className='`text-white bg-dod-500/80 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                Send Transcript
                            </button>
                            {/* <Button btnText={"Send Transcript"} link={"/dashboard"}></Button> */}
                        </div>
                    </div>

                </form>
                {isOpen && <GeneralPurposeOverlay toggleModal={setIsOpen} title={"Official Transcript Request Confirmation"} disable={setIsSubmitted} message={"Are you sure you want to send this request for an official transcript?"} path={"/serviceMember/requestOfficialTranscript"}/>}
                <h1 className='pb-2 border-b mt-16 text-xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Official Transcript Request History
                    </div> 
                </h1>
                <Table columnTitles={["Requested Date", "School", "Delivery Method", "Request Status", "School ID", "Date Viewed", "Org/School POC"]} 
                    rowsData={transcriptList}> </Table>
            </div>
        </DefaultLayout>
    );
}