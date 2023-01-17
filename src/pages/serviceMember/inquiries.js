import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import TwoChoiceCard from '@/components/cards/TwoChoiceCard';


export default function Inquiry() {
    const userData = useStore((state) => state.userData);

    const cards = [
        {
            title: "Course Update",
            description: "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.",
            // buttonLabel: "View Basic Transcript",
            firstRoutePath:"transcripts/basicTranscript",
            secondRoutePath: "transcripts/summaryTranscript"
        },
        {
            title: "Leadership Course",
            description: "Confutatis venedictis sae no adictis. ",
            // buttonLabel: "View Summary Transcript",
            firstRoutePath:"transcripts/summaryTranscript",
            secondRoutePath: "transcripts/basicTranscript"
        },
        {
            title: "Course Update",
            description: "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.",
            // buttonLabel: "View Basic Transcript",
            firstRoutePath:"transcripts/basicTranscript",
            secondRoutePath: "/profile"
        },
        
        
    ]

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Inquiries
                    </div> 
                </h1>
                <div className=' flex-col flex w-1/6 justify-start pb-6'>
                    <Button className="rounded-none" btnText={"+ Start New Inquiry"} link={'/serviceMember/transcripts/'}/>

                </div>
                <div className=' flex-col flex h-18 justify-center w-full gap-5'>
                    {cards.map((card, index) => {
                        return(
                            <>
                                <TwoChoiceCard key={index} title={card.title} description={card.description} buttonLabel="Reopen Inquiry" firstRoutePath={card.firstRoutePath} viewRoutePath={card.secondRoutePath}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}