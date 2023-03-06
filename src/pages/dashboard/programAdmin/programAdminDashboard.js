import Card from '@/components/cards/Card';
import useStore from '@/store/store';

const cards = [
    // {
    //     title: "Inquiry Management",
    //     description: "Manages Inquiries: Prioritizes, categorizes, and assignes inquiries. Tracks correspondense",
    //     buttonLabel: "Go to Inquiry Management",
    //     routePath:"/programAdmin/inquiryManagement"
    // },
    {
        title: "Accounts Management",
        description: "Reset account passwords and general reporting",
        buttonLabel: "Go to Accounts Management",
        routePath:"/programAdmin/accountsManagement"
    },
    {
        title: "ESO Management",
        description: "Manages ESO workflows and monior their current workload",
        buttonLabel: "Go to ESO Management",
        routePath:"/programAdmin/esoManagement"
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