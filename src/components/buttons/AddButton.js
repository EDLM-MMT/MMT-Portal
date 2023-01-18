import { PlusCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function AddBtn({ btnText, link }) {

  return (
    <Link href={{ pathname: link }} passHref>
      <button
        id={'add-button-' + btnText}
        className='flex justify-center items-center w-max h-9 text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none' title='view transcript'
        // onClick={handleClick}
      >
        <PlusCircleIcon className='h-5 w-5'/>
        {btnText} 
      </button>
    </Link>
  );
}
