import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function DegreePathwaysList() {

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Degree Pathways List
                    </div> 
                </h1>
                <hr></hr>
                    <table
                        className='w-full border-separate '
                        style={{ borderSpacing: 0 }}
                    >
                        <thead className='bg-gray-50 '>
                            <tr>
                                <h1>row1</h1>
                            </tr>
                        </thead>
                        <tbody className='bg-white text-left '>
                            <tc>
                                col1
                            </tc>
                            <tc>
                                col2
                            </tc>
                            <tc>
                                col3
                            </tc>

                        </tbody>
                    </table>
            </div>
        </DefaultLayout>
    );
}