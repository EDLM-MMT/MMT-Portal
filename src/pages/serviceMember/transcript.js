import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';

export default function Transcript() {
    const userData = useStore((state) => state.userData);

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Transcripts
                        <Button btnText={"Request Official Transcript"} link={"/serviceMember/requestOfficialTranscript"}></Button>
                    </div> 
                </h1>

                <div className='flex flex-row gap-6'>
                <TranscriptCard title={"Basic Transcript"} 
                    description={"Includes military courses taken by service member."}
                    type={"basic"}/>

                <TranscriptCard title={"Complete Enterprise Transcript"} 
                    description={"Included the Basic transcript data as well as any other learning experiences completed."}
                    type={"complete"}/>

                <TranscriptCard title={"Academic Transcript"} 
                    description={"Includes degree and certificates completed as well as all academic courses taken."}
                    type={"academic"}/>
                </div>
            </div>
        </DefaultLayout>
    );
}