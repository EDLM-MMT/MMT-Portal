import Card from '@/components/cards/Card';
import useStore from '@/store/store';

const cards = [
    {
        title: "Inquiry Management",
        description: "Manages Inquiries: Prioritizes, categorizes, and assignes inquiries. Tracks correspondense",
        buttonLabel: "Go to Inquiries",
        routePath:"/programAdmin/inquiryManagement"
    },
    {
        title: "Account Support",
        description: "Customer support: Locked out of account and General reporting",
        buttonLabel: "Go to Account Support",
        routePath:"accountSupport"
    },
]


export default function ProgramAdminDashboard() {
    const userData = useStore((state) => state.userData);

    return (
        <div className="ml-12 grid grid-cols-3 gap-24">
            {cards.map((card, index) => {
                return(
                    <Card key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}/>
                )
            })}
        </div>
    );
}