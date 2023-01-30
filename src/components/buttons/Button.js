import Link from 'next/link';
import { twMerge } from "tailwind-merge";

export default function Button({ btnText, className, link }) {

    const classes = twMerge(`text-white bg-dod-500/80 hover:bg-dod-700 focus:ring-4 focus:outline-none focus:ring-dod-700 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dod-600 dark:hover:bg-dod-700 dark:focus:ring-dod-700
        ${className ?? ""}
    `);
    return (
        <Link href={link} key={btnText} passHref>
            <button 
                className={classes}>
                    {btnText}
                </button>
        </Link>
    );
}
