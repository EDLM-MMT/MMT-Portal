import DashboardCard from '@/components/cards/DashboardCard';
import useStore from '@/store/store';
import inquiriesImage from '../../../assets/images/esoInquiry.png';
import careerCounselingImage from '../../../assets/images/careercounseling.png';
import degreePathwaysImage from '../../../assets/images/degreepathways.png';

const cards = [
    {
        title: "Assessment Reporting",
        description: "Manage service member inquiries, update service member profiles",
        buttonLabel: "Go to Enrollment By University",
        secondButtonLabel: "Go to Enrollment By State",
        image: inquiriesImage,
        routePath:"execStakeholder/universityEnrollment",
        secondRoutePath:"execStakeholder/stateEnrollment"
    },
    {
        title: "Official Transcript Access",
        description: "View Official Transcript requests submitted to this institution",
        buttonLabel: "Go to Official Transcript Access",
        secondButtonLabel: null,
        image: degreePathwaysImage,
        routePath:"execStakeholder/personnelData",
        secondRoutePath: null
    },
]

export default function AcademicInstituteDashboard() {
    const userData = useStore((state) => state.userData);
    return (
        <div className='w-full'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    Academic Institute Dashboard
                </div> 
            </h1>
            <div className="flex justify-between gap-x-16 px-56">
                {cards.map((card, index) => {
                    return(
                        <div className=''>
                        <DashboardCard key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} secondButtonLabel={card.secondButtonLabel} dashboardImage={card.image} routePath={card.routePath} secondRoutePath={card.secondRoutePath}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}