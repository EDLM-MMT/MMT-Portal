import Card from '@/components/cards/Card';
import useStore from '@/store/store';

const cards = [
    {
        title: "Transcripts",
        description: "Request to Download Transcript: Baisc Enterprise Transcript, Complete Enterprise Transcript, Transcript Summary, and Academic Transcript",
        buttonLabel: "Go to Transcript",
        routePath:"serviceMember/transcripts"
    },
    {
        title: "Inquiries",
        description: "Open an Inquiry or access previous inquiries for assistance or corrections to your records",
        buttonLabel: "Go to Inquiries",
        routePath:"serviceMember/inquiries"
    },
    {
        title: "Degree Agreements",
        description: "View your current Degree Agreements with schools",
        buttonLabel: "Go to Degree Agreements",
        routePath:"serviceMember/degreeAgreements"
    },
    {
        title: "Degree Pathways",
        description: "View Degree Pathway options:By Rating/MOS Codes, Individual Degree Plans, By School, or All Programs ",
        buttonLabel: "Go to Degree Pathways",
        routePath:"serviceMember/degreePathways"
    },
]


export default function ServiceMemberDashboard() {
    const userData = useStore((state) => state.userData);

    return (
        <div className="ml-12 grid grid-cols-3 gap-y-10 gap-x-16">
            {cards.map((card, index) => {
                return(
                    <div className=''>
                    <Card key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}/>
                    </div>
                )
            })}
        </div>
    );
}