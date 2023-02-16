import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import Card from '@/components/cards/Card';
import ViewBtn from '@/components/buttons/ViewBtn';
import DownloadButton from '@/components/buttons/DownloadButton';
import Table from '@/components/Tables/Table';

export default function Transcripts() {
    const userData = useStore((state) => state.userData);

    const cards = [
        {
            title: "Basic Transcript",
            description: "Includes military courses taken by service member.",
            type: "Basic"
        },
        {
            title: "Summary Transcript",
            description: "Summary of trainings and courses completed. ",
            type: "Summary"
        },
        {
            title: "Academic Transcript",
            description: "Includes degree and certificates completed as well as all academic courses taken.",
            type: "Academic"
        },
        {
            title: "Complete Transcript",
            description: "Included the Basic transcript data, Summary Transcript data, and Aedemic Courses completed.",
            type: "Complete"
        },
    ]

    const data = [
        ["01/22/2023", 1, 3, 1, 1],
        ["01/21/2023", 3, 2, "", 2],
        ["01/20/2023", 1, 3, 1, 1],
        ["01/20/2023", 3, "", 2, 2],
        ["01/19/2023", 1, 3, 1, ""],
        ["01/18/2023", "", 2, 1, 2],
    ]

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Transcripts
                        <Button btnText={"Official JST Transcript"} link={"/serviceMember/requestOfficialTranscript"}></Button>
                    </div> 
                </h1>
                <div className='grid grid-cols-2 gap-y-10 gap-x-16'>
                    {cards.map((card, index) => {
                        return(
                            <div className='px-4'>
                                <Card key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}>
                                    <div className='flex flex-row align-bottom justify-between mt-5'>
                                        <ViewBtn transcriptType={card.type}/>
                                        <DownloadButton/> 
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <div className='m-4 mt-16 bg-white border h-50 rounded-md border-gray-200 p-4 mr-4 shadow'>
                    <h1 className='text-2xl font-semibold'>
                        Transcript Session History
                    </h1>
                    <Table columnTitles={["Login date", "Basic", "Summary", "Academic", "Complete"]} rowsData={data}/>
                </div>
            </div>
        </DefaultLayout>
    );
}