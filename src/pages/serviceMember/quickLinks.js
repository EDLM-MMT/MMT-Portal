import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Disclosure, Transition } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/solid';

export default function QuickLinks() {

    const FAQContent = [
    {   title: "How do I participate?",
        answer: "Users can login via SSO Keycloak or register a new account. Please navigate to the top right-hand corner and click on the “Sign In” button to begin."
    },
    {   title: "Who owns the content?",
        answer: "The content will remain owned by the source provider organizations within Department of Defense. Learners can navigate to Experience Discovery Service (XDS) and view courses hosted by providers. "
    },
    {   title: "How does the technology work?",
        answer: "ECC contains multiple software components which pulls data from multiple disparate systems’ data and displays it in one location for learners to quickly query and search courses across all of DoD."
    },
    {   title: "Where do I learn more?",
        answer: "ECC has documents, user guides, demos, and videos to help you learn about components. You can access these materials here."
    },
    {   title: "Need more support?",
        answer: "Contact your local system administrator."
    },
    ]

    const navigationContent = [
    {   title: "ACE Military Guide",
        link: "https://www.acenet.edu/Programs-Services/Pages/Credit-Transcripts/military-guide-online.aspx"
    },
    {   title: "Go Army Ed",
        link: "https://www.goarmyed.com/login.aspx"
    },
    {   title: "Marine Corps Voluntary Education",
        link: "https://usmc-mccs.org/services/education/voluntary-education/"
    },
    {   title: "MyEducation (WebTa)",
        link: "https://myeducation.netc.navy.mil/"
    },
    {   title: "Navy College Program",
        link: "https://www.navycollege.navy.mil/"
    },
    {   title: "Defense Activity for Non-traditional Ed Spt (DANTES)",
        link: "https://www.dantes.doded.mil/"
    },
    {   title: "Defense Language Inst (DLI)",
        link: "http://www.dliflc.edu/"
    },
    {   title: "Marine Corps University",
        link: "https://www.usmcu.edu/"
    },
    {   title: "National Personnel Center",
        link: "https://www.archives.gov/veterans/military-service-records"
    },
    {   title: "U.S. Navy",
        link: "https://www.navy.mil/"
    },
    {   title: "USAFI/GED Transcripts before July 1974",
        link: "https://jst.doded.mil/usafi/"
    },
    ]

    const panelCode = (content) =>
        content.map((question, index) => {
            return(
                <Disclosure key={index}>
                {({ open }) => (
                <div className='p-2 hover:bg-gray-200 hover:rounded-lg'>
                    <Disclosure.Button className="flex items-center rounded-lg justify-between text-left w-full p-5 font-medium border bg-dod-500/60 text-white border-gray-300 hover:opacity-90 hover:shadow ">
                        {question.title}
                        <ChevronDownIcon className={`w-6 h-6 ${open ? "transform rotate-180" : ""} `} />
                    </Disclosure.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Disclosure.Panel className="p-5 rounded-lg border border-t-0 ml-2 border-gray-300 focus:ring-4 focus:ring-gray-200 focus:bg-gray-50">
                        {question.answer}
                        <a href={question.link} target="_blank" className='text-blue-800 text-semibold underline'>Click here to open in a new tab</a>
                    </Disclosure.Panel>
                    </Transition>
                </div> )}
                </Disclosure>
            );
        });

    return (
        <DefaultLayout>
            <div className='mt-10 pb-20'>
                <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>FAQs and Quick Links</h1>
                <h2 className='text-xl font-semibold pb-2'>FAQs</h2>
                {panelCode(FAQContent)}
                <h2 className='text-xl font-semibold pb-2 mt-4'>Quick Links</h2>
                {panelCode(navigationContent)}
            </div>
        </DefaultLayout>
    );
}
