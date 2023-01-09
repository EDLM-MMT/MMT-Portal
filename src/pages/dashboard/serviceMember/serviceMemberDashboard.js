import Card from '@/components/Card';
import useStore from '@/store/store';

const cards = [
    {
        title: "Transcripts",
        description: "Request to Download Transcript: Baisc Enterprise Transcript, Complete Enterprise Transcript, Transcript Summary, and Academic Transcript",
        buttonLabel: "Go to Transcript",
        routePath:"transcript"
    },
    {
        title: "Inquiries",
        description: "Open an Inquiry or access previous inquiries for assistance or corrections to your records",
        buttonLabel: "Go to Inquiries",
        routePath:"inquiries"
    },
    {
        title: "Degree Agreements",
        description: "View your current Degree Agreements with schools",
        buttonLabel: "Go to Degree Agreements",
        routePath:"degreeAgreements"
    },
    {
        title: "Degree Pathways",
        description: "View Degree Pathway options:By Rating/MOS Codes, Individual Degree Plans, By School, or All Programs ",
        buttonLabel: "Go to Degree Pathways",
        routePath:"degreePathways"
    },
]


export default function ServiceMemberDashboard() {
    const userData = useStore((state) => state.userData);

    return (
        <div className='flex justify-between gap-10'>
            {cards.map((card, index) => {
                return(
                    // <div className='flex p-2'>
                        <Card key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}/>
                    // </div>
                )
            })}
        </div>
    );
}