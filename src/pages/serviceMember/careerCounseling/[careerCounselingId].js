import DefaultLayout from '@/components/layouts/DefaultLayout';
import ViewCounselingCard from '@/components/cards/ViewCounselingCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import useStore from '@/store/store';
import { Disclosure, Transition } from '@headlessui/react';
import CounselingTable from '@/components/Tables/CounselingTable';

export function getServerSideProps(context) {
    const { careerCounselingId } = context.query;
    return {
      props: {
        careerCounselingId,
      },
    };
  }

export default function CareerCounseling({careerCounselingId}) {

    const userData = useStore((state) => state.userData);
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    const timestamp = `${currDate}  ${currTime}`;


    const [career, setCareer] = useState([]);
    const router = useRouter();
    const [coursePlan,setCoursePlan] = useState([]);
    const [comments,setComments] = useState([]);

    useEffect(() => {
        axios
          .get(`/api/careerCounseling/${careerCounselingId}`)
          .then((res) => {
            console.log("Result inside viewInquiry", res.data.course_plan);
            setCareer(res.data);
            setCoursePlan(res.data.course_plan);
            setComments(res.data.counselingComments);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleClick = () => {
        router.push("/serviceMember/careerCounseling");
    }

    const handlePost = (event) => {
      event.preventDefault()
      //console.log(event.target[0].value)
      const newComment = {
        author: `${userData?.learner.personnel.person.firstName} ${userData?.learner.personnel.person.lastName}`,
        title:"",
        comment: event.target.comment.value,
        timestamp: timestamp,
      }
      setComments(comments =>[newComment, ...comments]);
      event.target[0].value = "";
    }

    const handleAddCourse = (event) => {
        event.preventDefault()
        console.log(event.target[1].value)
        const newCourse = {
            course_number: event.target.courseNumber.value ,
            course_name:event.target.courseName.value,
            credit_hours: event.target.creditHours.value,
            projected_semester: event.target.projectedSemester.value,
            status: "Pending Approval",
          }
          setCoursePlan(coursePlan =>[...coursePlan, newCourse]);
          event.target[0].value = "";
          event.target[1].value = "";
          event.target[2].value = "";
          event.target[3].value = "";
      }
    console.log(coursePlan);

    const handleSave = (event) => {
        event.preventDefault()
        console.log("Save button is clicked!")
      }

    //console.log("Whats inside data:", inquiry.id)
    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    Career Counseling
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              Career Counseling Dashboard</button> -{`>`} {career.degree}
            </div>
            <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    <ViewCounselingCard key={career.id} title={career.degree} 
                                        school={career.school} startDate={career.degree_startDate} 
                                        endDate={career.projected_graduation} assignedESO={career.assigned_eso}
                                        totalHours={career.total_creditHours} completedHours={career.creditHours_completed}/>                   
            </div>
            <div className='bg-white w-full border h-50 mt-4 rounded-md border-gray-200 p-4 pb-0 shadow'>
                <div className="font-semibold">
                    Courses Plan
                </div>
                <div className="mt-2 mb-4">
                    <CounselingTable coursePlan={coursePlan} />
                </div>
                <Disclosure key={0}>
                {({ open }) => (
                <div className='p-2 hover:bg-gray-200 hover:rounded-lg'>
                    <Disclosure.Button className="flex items-center rounded-lg justify-between text-left w-full p-3 font-medium border bg-dod-300/50 border-gray-300 hover:opacity-90 hover:shadow ">
                        Add Courses
                    </Disclosure.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    </Transition>
                    <Disclosure.Panel className="p-5 rounded-lg border border-t-0 ml-2 border-gray-300 focus:ring-4 focus:ring-gray-200 focus:bg-gray-50">                        
                        <form onSubmit={handleAddCourse}>
                            <div className="flex flex-wrap flex-row gap-20 mb-4">
                                <div>
                                    <label for="courseNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Number</label>
                                    <input type="text-area" id="courseNumber" name="courseNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="w-64">
                                    <label for="courseName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                                    <input type="text-area" id="courseName" name="courseName" class="justify-start bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="creditHours" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Credit Hours</label>
                                    <input type="text-area" id="creditHours" name="creditHours" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="projectedSemester" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projected Semester</label>
                                    <input type="text-area" id="projectedSemester" name="projectedSemester" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="flex justify-end w-full">
                                <button className="flex justify-end items-center tect-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Add Course</button>
                            </div>
                        </form>
                    </Disclosure.Panel>
                </div> )}
                </Disclosure>
                <div className="flex justify-end w-full mt-4 mb-4">
                    <button onClick={handleSave} className="flex justify-end items-center tect-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Save Changes</button>
                </div>
            </div>
            <div className='bg-white w-full border h-50 mt-4 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
              <form onSubmit={handlePost}>
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a comment:</label>
                <input type="text-area" id="description" name="comment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Please provide comments if necessary."} required />
                
                <div className="flex justify-end w-full">
                    <button className="flex justify-end items-center tect-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-6 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none">Post</button>
                </div>
              </form>
            
                <div className="font-medium">
                Counseling Timeline
                </div>
                    {comments?.map((data, index) => {
                        return(
                            (data.title === 'ESO') ? (
                                <div className='bg-white w-3/4 text-black border h-50 mt-2 mb-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                                    <div className="flex-row flex justify-between text-base mb-4 font-medium">
                                        <div className="flex-row flex pr-2 text-base mb-2 font-medium">{`${data.author} (${data.title})`}</div> 
                                        <div>{data.timestamp}</div>
                                    </div>
                                    <div className="text-sm pl-4">{data.comment}</div>
                                </div>
                            ):(
                                <div className="mt-4 mb-4 ml-96">
                                    <div className='bg-white w-3/4 text-black border h-50 mt-0 rounded-md border-gray-200 p-4 pb-2 shadow'>
                                        <div className="flex-row flex justify-between text-base mb-4 font-medium">
                                            <div className="flex-row flex pr-2 text-base mb-2 font-medium">{data.author} </div> 
                                            <div>{data.timestamp}</div>
                                        </div>
                                        <div className="text-sm pl-4">{data.comment}</div>
                                    </div>
                                </div>
                            )
                        )
                    })}            
                </div>
            </div>
        </DefaultLayout>
    );
}