import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import useStore from '@/store/store';
import ViewCard from '@/components/cards/ViewCard';
import Table from '@/components/Table';

export function getServerSideProps(context) {
    const { degreeAgreementsId } = context.query;
    return {
      props: {
        degreeAgreementsId,
      },
    };
  }

export default function DegreeAgreementsView({degreeAgreementsId}) {

    const userData = useStore((state) => state.userData);
    const [degreeAgreement, setDegreeAgreement] = useState([]);

    const router = useRouter();


    useEffect(() => {
        axios
          .get(`/api/degreeAgreements/${degreeAgreementsId}`)
          .then((res) => {
            setDegreeAgreement(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleClick = () => {
        router.push("/serviceMember/degreeAgreements");
    }

    const data = [
        ["MAC 1105", "Intro to Algebra", 3, "In Progress", "Spring 2023"],
        ["COP 1000", "Intro to Programing", 3, "In Progress", "Spring 2023"],
        ["SOC 1101", "Sociology", 4, "Enrolled", "Summer 2023"],
        ["SPC 1608", "Fundamentals to Speech", 3, "Not Yet Started", ""],
        ["CHM 1101", "Intro to Chemistry", 3, "Completed", "Fall 2022"],

    ]

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    View Degree Agreements
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              My Degree Agreements </button> -{`>`} {degreeAgreement.title}
            </div>
            <div className=' flex-col flex h-18 justify-center w-full gap-5 pb-2 mt-4'>
                <ViewCard key={degreeAgreement.id} title={degreeAgreement.title} description={degreeAgreement.description}/>                   
            </div>
            <div className='bg-white w-full border h-50 mt-4 rounded-md border-gray-200 p-4 pb-2 shadow'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col font-semibold'>
                        Approved By: {degreeAgreement.approvedBy} <br />
                        Assigned DSO: {degreeAgreement.assignedESO} <br />
                        Degree Start Date: {degreeAgreement.degreeStartDate}
                    </div>
                    <div className='flex flex-col font-semibold'>
                        Total Cedit Hours: {degreeAgreement.totalCreditHours} <br />
                        Credit Hours Completed: {degreeAgreement.completedCreditHours} <br />
                        Projected Graduation Date: {degreeAgreement.projectedGradDate}
                    </div>  
                </div>
            </div>
            <Table columnTitles={["Course Number", "Course Name", "Credit Hours", "Status", "Semester"]}
                 rowsData={data}/>        
        </div>

        

        </DefaultLayout>
    );
}