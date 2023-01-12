import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';

export function getServerSideProps(context) {
    const { transcriptType } = context.query;
    return {
      props: {
        transcriptType,
      },
    };
  }

export default function TranscriptView({transcriptType}) {
    const userData = useStore((state) => state.userData);

    return (
        <DefaultLayout>
                <div className='flex flex-row gap-6'>
                <TranscriptCard title={`${transcriptType} Transcript`} 
                    description={"Includes military courses taken by service member."}
                    type={transcriptType} routePath={"/serviceMember/transcripts"}/>
                </div>
        </DefaultLayout>
    );
}