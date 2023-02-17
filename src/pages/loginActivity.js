import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import profileImage from '@/../public/profile-picture.png';
import Image from 'next/image';
import Table from '@/components/tables/Table';

export default function LoginActivity() {
    const userData = useStore((state) => state.userData);

    const data = [
        ["01/22/2023", 1, 3, 1, 1, 2],
        ["01/21/2023", 3, 2, "", 2, 1],
        ["01/20/2023", 1, 3, 1, 1, 4],
        ["01/20/2023", 3, "", 2, 2, 1],
        ["01/19/2023", 1, 3, 1, "", 2],
        ["01/18/2023", "", 2, 1, 2, ""],

    ]
    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Login Activity</h1>
            <Table columnTitles={["Login date", "Trascripts", "Inquiries", "Degree Agreements", "Degree Pathways", "Quick Links"]} rowsData={data}/>

        </div>
        </DefaultLayout>
    );
}