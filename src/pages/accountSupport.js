import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import profileImage from '@/../public/profile-picture.png';
import Image from 'next/image';
import Table from '@/components/Table';

export default function AccountSupport() {
    const userData = useStore((state) => state.userData);

    const data = [
        ["John Smith", "jsmith", "Reset", "View"],
        ["Zach Blanchard", "zblanchard", "Reset", "View"],
        ["Aimee Wallis", "awallis", "Reset", "View"],
        ["Alexia Jacobs", "ajacobs", "Reset", "View"],
        ["Jennie Haywards", "jhayward", "Reset", "View"],
        ["Tyreece Hume", "thume", "Reset", "View"],

    ]
    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Account Support</h1>
            <Table columnTitles={["Name", "Username", "Reset Password", "View Login History"]} rowsData={data}/>

        </div>
        </DefaultLayout>
    );
}