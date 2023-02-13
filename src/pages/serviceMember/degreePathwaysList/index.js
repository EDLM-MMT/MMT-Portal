import DefaultLayout from "@/components/layouts/DefaultLayout";
import Table from '@/components/Table';

export default function DegreePathwaysList() {

    const data = [
        [ "Bussiness Administration", "Berkeley College - Online (NJ)", "40hr", "40hr" ],
        [ "Data Scientist", "Florida State College at Jacksonville (FL)", "40hr", "40hr" ],
        [ "Computer Science", "University of Florida - Online (FL)", "24hr", "24hr" ],
      ]

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Degree Pathways List
                    </div> 
                </h1>
                <p className="border-b-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non vulputate est. Pellentesque ultrices eget orci sit amet sollicitudin. Maecenas tincidunt tortor eu mattis malesuada. Donec vel libero facilisis, pretium ligula ut, consectetur ex. Quisque quam justo, ornare in erat nec, cursus finibus massa. Curabitur a accumsan nunc.
                </p>
                <Table columnTitles={["Major", "School", "Required Hours", "Hours Still Needed", "Career Counseling", "Delete"]} rowsData={data}/>
            </div>
        </DefaultLayout>
    );
}