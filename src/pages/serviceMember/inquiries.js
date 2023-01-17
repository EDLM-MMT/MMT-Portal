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
            routePath:"serviceMember/transcripts/basicTranscript",
            type: "Basic"
        },
        {
            title: "Leadership Course",
            description: "Confutatis venedictis sae no adictis. ",
            // buttonLabel: "View Summary Transcript",
            routePath:"serviceMember/transcripts/summaryTranscript",
            type: "Summary"
        },
        {
            title: "Course Update",
            description: "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.",
            // buttonLabel: "View Basic Transcript",
            routePath:"serviceMember/transcripts/basicTranscript",
            type: "Basic"
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
                                <TwoChoiceCard key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}>
                                    <div className='flex flex-row align-bottom mt-5'>
                                        <div className= 'w-1/2'>
                                            <Button 
                                                className='text-black bg-white hover:bg-white hover:text-black justify-center 
                                                h-18
                                                text-sm 
                                                font-bold
                                                items-center
                                                border-black
                                                border
                                                border-l-0
                                                border-b-0
                                                rounded-none 
                                                gap-2 '
                                                btnText={"Reopen Inquiry"} 
                                                link={'/serviceMember/transcripts/'}/>
                                        </div>
                                        <div className= 'w-1/2'>
                                            <Button  className='text-black bg-white hover:bg-white hover:text-black justify-center 
                                                text-sm 
                                                font-bold
                                                items-center
                                                border-black
                                                border
                                                border-r-0
                                                border-b-0
                                                rounded-none 
                                                gap-2 '
                                                btnText={"View"} 
                                                link={'/profile'}/>
                                        </div>  
                                    </div>
                                </TwoChoiceCard>
                            </>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}