import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import TwoChoiceCard from '@/components/cards/TwoChoiceCard';
import AddBtn from '@/components/buttons/AddButton';

export default function Inquiry() {
    const userData = useStore((state) => state.userData);

    const cards = [
        {
            title: "Leadership Course",
            description: "Confutatis venedictis sae no adictis. ",
            firstRoutePath:"transcripts/summaryTranscript",
            secondRoutePath: "transcripts/basicTranscript"
        },
    ]

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Degree Agreements
                    </div> 
                </h1>
                <div className=' flex-col flex w-1/6 justify-start pb-6'>
                    <AddBtn className="rounded-none" btnText={"Start New Degree Agreement"} link={'/serviceMember/newDegreeAgreement/'}/>
                </div>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {cards.map((card, index) => {
                        return(
                            <TwoChoiceCard key={index} title={card.title} description={card.description} buttonLabel="Close Degree Agreement" firstRoutePath={card.firstRoutePath} viewRoutePath={card.secondRoutePath}/>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}