import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import profileImage from '@/../public/profile-picture.png';
import Image from 'next/image';
import Table from '@/components/tables/Table';

export default function LoginActivity() {
    const userData = useStore((state) => state.userData);

    const data = [
        ["1/24/2023 2:43:20 PM", 1, 3, 1, 1, 2],
        ["1/21/2023 3:43:20 PM", 3, 2, "", 2, 1],
        ["1/20/2023 2:53:20 PM", 1, 3, 1, 1, 4],
        ["1/20/2023 7:43:20 PM", 3, "", 2, 2, 1],
        ["1/19/2023 9:45:20 PM", 1, 3, 1, "", 2],
        ["1/18/2023 2:30:20 PM", "", 2, 1, 2, ""],

    ]
    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Login Activity</h1>
            <Table columnTitles={["Login Date/Time", "Trascripts", "Inquiries", "Degree Agreements", "Degree Pathways", "Quick Links"]} rowsData={data}/>

        </div>
        </DefaultLayout>
    );
}