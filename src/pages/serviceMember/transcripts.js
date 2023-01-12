import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import Card from '@/components/cards/Card';
import ViewBtn from '@/components/buttons/ViewBtn';
import DownloadButton from '@/components/buttons/DownloadButton';

export default function Transcript() {
    const userData = useStore((state) => state.userData);

    const cards = [
        {
            title: "Basic Transcript",
            description: "Includes military courses taken by service member.",
            // buttonLabel: "View Basic Transcript",
            routePath:"serviceMember/transcripts/basicTranscript",
            type: "Basic"
        },
        {
            title: "Summary Transcript",
            description: "Summary of trainings and courses completed. ",
            // buttonLabel: "View Summary Transcript",
            routePath:"serviceMember/transcripts/summaryTranscript",
            type: "Summary"
        },
        {
            title: "Academic Transcript",
            description: "Includes degree and certificates completed as well as all academic courses taken.",
            // buttonLabel: "View Academic Transcript",
            routePath:"serviceMember/transcripts/academicTranscript",
            type: "Academic"
        },
        {
            title: "Complete Enterpise Transcript",
            description: "Included the Basic transcript data, Summary Transcript data, and Aedemic Courses completed.",
            // buttonLabel: "View Complete Transcipt",
            routePath:"serviceMember/transcripts/completeTranscript",
            type: "Complete"
        },
        
    ]

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Transcripts
                        <Button btnText={"Request Official Transcript"} link={"/serviceMember/requestOfficialTranscript"}></Button>
                    </div> 
                </h1>
                <div className='flex justify-between gap-10'>
                    {cards.map((card, index) => {
                        return(
                            <>
                                <Card key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}>
                                    <div className='flex flex-row align-bottom justify-between mt-5'>
                                        <ViewBtn transcriptType={card.type}/>
                                        <DownloadButton/> 
                                    </div>
                                </Card>
                            </>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}