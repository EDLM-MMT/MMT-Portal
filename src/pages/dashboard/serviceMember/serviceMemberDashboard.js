import DashboardCard from '@/components/cards/DashboardCard';
import useStore from '@/store/store';
import transcriptImage from '@/assets/images/transcripts.png';
import inquiriesImage from '../../../assets/images/inquiries.png';
import degreePathwaysImage from '../../../assets/images/degreepathways.png';
import degreeAgreementsImage from '../../../assets/images/degreeagreements.png';
import careerCounselingImage from '../../../assets/images/careercounseling.png';


const cards = [
    {
        title: "Transcripts",
        description: "Request to Download Transcript: Baisc Enterprise Transcript, Complete Enterprise Transcript, Transcript Summary, and Academic Transcript",
        buttonLabel: "Go to Transcript",
        image: transcriptImage,
        routePath:"serviceMember/transcripts"
    },
    {
        title: "Inquiries",
        description: "Open an Inquiry or access previous inquiries for assistance or corrections to your records",
        buttonLabel: "Go to Inquiries",
        image: inquiriesImage,
        routePath:"serviceMember/inquiries"
    },
    {
        title: "Degree Agreements",
        description: "View your current Degree Agreements with schools",
        buttonLabel: "Go to Degree Agreements",
        image: degreeAgreementsImage,
        routePath:"serviceMember/degreeAgreements"
    },
    {
        title: "Degree Pathways",
        description: "View Degree Pathway options:By Rating/MOS Codes, Individual Degree Plans, By School, or All Programs ",
        buttonLabel: "Go to Degree Pathways",
        image: degreePathwaysImage,
        routePath:"serviceMember/degreePathways"
    },
    {
        title: "Career Counseling",
        description: "Access or update Career counseling options with an ESO",
        buttonLabel: "Go to Career Counseling",
        image: careerCounselingImage,
        routePath:"serviceMember/careerCounseling"
    },
]


export default function ServiceMemberDashboard() {
    const userData = useStore((state) => state.userData);

    return (
        <div className='w-full'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    JST Dashboard
                </div> 
            </h1>
            <div className="ml-12 grid grid-cols-3 gap-y-10 gap-x-16">
                {cards.map((card, index) => {
                    return(
                        <div className=''>
                        <DashboardCard key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} dashboardImage={card.image} routePath={card.routePath}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}