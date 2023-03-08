import DashboardCard from "@/components/cards/DashboardCard"
import useStore from '@/store/store';
import accountsmanagment from "../../../assets/images/accountsmanagment.jpg"
import esomanagement from "../../../assets/images/esomanagement.png"

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
        image: accountsmanagment,
        routePath:"/programAdmin/accountsManagement"
    },
    {
        title: "ESO Management",
        description: "Manages ESO workflows and monior their current workload",
        buttonLabel: "Go to ESO Management",
        image: esomanagement,
        routePath:"/programAdmin/esoManagement"
    },
]


export default function ProgramAdminDashboard() {
    const userData = useStore((state) => state.userData);

    return (
        <div className='w-full'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    Program Administrator Dashboard
                </div> 
            </h1>
            {/* <div className="flex flex-row gap-20 px-56 justify-center"></div> */}
            <div className="ml-12 grid grid-cols-3 gap-24">
                {cards.map((card, index) => {
                    return(
                        <DashboardCard key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} dashboardImage={card.image} routePath={card.routePath}/>
                    )
                })}
            </div>
        </div>
    );
}