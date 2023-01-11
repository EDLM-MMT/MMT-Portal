import Link from 'next/link';

export default function Button({ btnText, link }) {
    return (
        <Link href={link} key={btnText} passHref>
            <button 
                className='flex justify-center text-lg items-center gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none'>
                    {btnText}
                </button>
        </Link>
    );
}
