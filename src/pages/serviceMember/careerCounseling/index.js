import DefaultLayout from "@/components/layouts/DefaultLayout";
import Table from '@/components/Table';

export default function CareerCounselingList() {

    const data = [
        [ "Computer Science", "University of Florida - Online (FL)", "24hr", "24hr", "Go To Career Counseling", "Delete" ],
        [ "Bussiness Administration", "Berkeley College - Online (NJ)", "40hr", "40hr", "Go To Career Counseling", "Delete" ],
        [ "Data Scientist", "Florida State College at Jacksonville (FL)", "40hr", "40hr", "Go To Career Counseling", "Delete" ],
      ]

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Career Counseling Dashboard
                    </div> 
                </h1>
                <p className="border-b-none">
                    Welcome to Career Counseling! Below is a list of majors at schools you can add and remove from. You can contact an ESO for further questions for each option listed below by clicking "Go to Career Counseling".
                
                </p>
                <Table columnTitles={["Major", "School", "Required Hours", "Hours Still Needed", "Career Counseling", "Delete"]} rowsData={data}/>
            </div>
        </DefaultLayout>
    );
}