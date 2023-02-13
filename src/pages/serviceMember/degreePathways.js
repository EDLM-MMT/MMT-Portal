import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/solid';
import Dropdown from '@/components/dropdowns/Dropdown';
import Filter from '@/components/Filter';

export default function DegreePathways() {  
    const [selected, setSelected] = useState("School");
    const [searchInput, setSearchInput] = useState("");
    const [filter, setFilter] = useState("");

    const onChange = (e) => {
        setSelected(e.target.name);
    }

    const onFilterChange = (e) => {
        console.log(e.target.name)
    }

    useEffect(() =>{

        

    },[]);

    const schoolsList = [
        {   name: "City University",
            datas: [
                {
                    data: "BA Applied Psychology",
                    codes: ["NC", "RP"]
                },
                {
                    data: "BA Applied Psychology (Criminal Behavior)",
                    codes: ["MA"]
                },
                {
                    data: "BSBA Project Management",
                    codes: ["AZ", "LS", "PS", "SH (Barber/Clerk)", "SH (Laundry/DC)", "SH (Tailor)", "YN"]
                },
                {
                    data: "BSIS Information Networking Track",
                    codes: ["CTN", "CTR", "CTT", "IT"]
                },
                {
                    data: "BSIS Information Security",
                    codes: ["IT"]
                },
                {
                    data: "BSIS Programming",
                    codes: ["IT"]
                },
                {
                    data: "BSIS Speciality Systems Development and Mgmt",
                    codes: ["IT"]
                },
                {
                    data: "BSIS Web 2.0 Web Track",
                    codes: ["IT"]
                }
            ]
        },
        {   name: "Emory Riddle",
            datas: [
                {
                    data: "AS Professional Aeronautics",
                    codes: ["X", "XX", "Unrestricted"]
                },
                {
                    data: "BS Professional Aeronautics",
                    codes: ["X", "XXXXX", "XXXXXX"]
                },
                {
                    data: "BS Technical Management",
                    codes: ["CM", "XX", "XXX"]
                }
            ]
        },
        {   name: "Florida National University",
            datas: [
                {
                    data: "AA Business Administration",
                    codes: ["IS", "MC", "RP"]
                },
                {
                    data: "AA Criminal Justice",
                    codes: ["ABE, ABF", "ABH, AD, AE, AG, AM, AME, AO, AS, AT, AWF, AWO, AWR, AWS, AWV, AZ, PR", "AC", "IS", "LN, LS, MA"]
                },
                {
                    data: "AS Accounting",
                    codes: ["IT, LS"]
                },
                {
                    data: "AS Business Administration",
                    codes: ["AWF, AWO, AWR, AWS, AWV, AZ, FC, IC, IS, LN, LS, MA, OS, PS, QM, SB, SH, SO, YN"]
                },
                {
                    data: "AS Computer Information Technology",
                    codes: ["IC, IT, OS"]
                }
            ]
        },
        {   name: "Fort Hays State University",
            datas: [
                {
                    data: "BA Sociology",
                    codes: ["ABE, ABF, ABH, AC, AD, AE, AG, AM, AME, AO, AS, AT, AWF, AWO, AWR, AWS, AWV, AZ, BM, BU, CE, CM, CS, CTI, CTM, CTN, CTR, CTT, DC, EA, EM, EN, EO, EOD, ET, FC, FT, GM, GSE, GSM, HM, HT, IC, IS, IT, LN, LS, MA, MC, MM, MN, MR, MT, MU, NC, ND, OS, PR, PS, QM, RP, SB, SO, STG, STS, SW, UT, YN"]
                },
                {
                    data: "BGS General Studies",
                    codes: ["ABE, ABF, ABH, AC, AD, AE, AG, AM, AME, AO, AS, AT, AWF, AWO, AWR, AWS, AWV, AZ, BM, BU, CE, CM, CS, CTI, CTM, CTN, CTR, CTT, DC, EA, EM, EN, EO, EOD, ET, FC, FT, GM, GSE, GSM, HM, HT, IC, IS, IT, LN, LS, MA, MC, MM, MN, MR, MT, MU, NC, ND, OS, PR, PS, QM, RP, SB, SH, SO, STG, STS, SW, UT, YN"]
                },
                {
                    data: "BS Justice Studies",
                    codes: ["MA"]
                },
                {
                    data: "BS Organizational Leadership",
                    codes: ["BM", "NC", "QM", "RP"]
                }
            ]
        },
        {   name: "Liberty University",
            datas: [
                {
                    data: "BS Interdisciplinary Studies",
                    codes: ["ABF, AD, AE, AM, AO, AS, AT, AZ, CM, CS, CTI, CTR, CTT, HT, LS, PS, QM, SO, STG, STS, YN"]
                },
                {
                    data: "BS Psychology",
                    codes: ["ABF, AD, AM, AO, AS, AT, AZ, CM, CS, CTI, CTR, CTT, HT, QM, SO, STG, STS, YN"]
                },
                {
                    data: "BS Religion",
                    codes: ["ABF, AD, AM, AO, AS, AT, AZ, CM, CS, CTI, CTR, CTT, HT, PS, QM, SO, STG, STS"]
                }
            ]
        },
    ]

    const majorsList = [
        {   name: "AA Business Administration",
            datas: [
                {
                    data: "American Military University (WV)",
                    codes: ["Unrestricted"]
                },
                {
                    data: "Florida National University (FL)",
                    codes: ["IS, MC, RP"]
                },
                {
                    data: "Strayer University (DC)",
                    codes: ["BM, CS, CTI, LN, LS, QM"]
                },
            ]
        },
        {   name: "AAS Criminal Justice",
            datas: [
                {
                    data: "Bismarck State College (ND)",
                    codes: ["MA"]
                },
                {
                    data: "Central Texas College (TX)",
                    codes: ["MA"]
                },
                {
                    data: "Dallas County Community College District - TeleCollege (TX)",
                    codes: ["AO, AZ, CTI, CTM, CTN, CTR, CTT, ET, FC, GM, IS, IT, LS, MN, MU, ND, OS, PS, SH, YN", "NC"]
                },
            ]
        },
        {   name: "BBA Business Administration (General)",
            datas: [
                {
                    data: "American Military University (WV)",
                    codes: ["PS"]
                },
                {
                    data: "American Military University (WV)",
                    codes: ["AMT", "AST", "LS", "YN"]
                },
                {
                    data: "Berkeley College - Online (NJ)",
                    codes: ["ABE, ABF, ABH, AC, AD, AE, AG, AM, AME, AO, AS, AT, AWF, AWO, AWR, AWS, AWV, AZ, BM, CS, CTI, CTM, CTR, DC, EM, EN, EO, FC, GSE, HT, IC, IS, LS, MM, MR, NC, ND, OS, PR, PS, QM, SB, SH, SO, SW, UT, YN"]
                },
                {
                    data: "University of the Incarnate Word (TX)",
                    codes: ["AZ, LS, PS, SH"]
                }
            ]
        }
    ]

    const mosList = [
        {   name: "ABE, ABF, ABH, AC, AD, AE, AG, AM, AME, AO, AS, AT, AWF, AWO, AWR, AWS, AWV, AZ, BM, CS, CTI, CTM, CTR, DC, EM, EN, EO, FC, GSE, HT, IC, IS, LS, MM, MR, NC, ND, OS, PR, PS, QM, SB, SH, SO, SW, UT, YN",
            datas: [
                {
                    data: "Berkeley College - Online (NJ)",
                    codes: ["AAS Business Administration (Management)", "BBA Business Administration (General Business)", "BBA Business Administration (Management)", "BBA Business Administration (Marketing)", "BS Business Administration"]
                },
            ]
        },
        {   name: "AE, AME",
            datas: [
                {
                    data: "Bismarck State College (ND)",
                    codes: ["AAS Electrical Transmission Systems Technology", "AAS Nuclear Power Technology", "AAS Power Plant Technology"]
                },
                {
                    data: "Florida State College at Jacksonville (FL)",
                    codes: ["AS Environmental Science"]
                }
            ]
        },
        {   name: "AET, AMT, AST, BM, CS, DC, DV, EM, ET, GM, HS, IS, IT, ME, MK, MST, MU, OS, SK, YN",
            datas: [
                {
                    data: "Excelsior College (NY)",
                    codes: ["AS Liberal Arts CG", "AA Liberal Arts CG", "BA Liberal Arts (Liberal Studies) CG", "BS Liberal Arts (Liberal Studies) CG"]
                },
            ]
        },
        {   name: "IS, MA",
            datas: [
                {
                    data: "Excelsior College (NY)",
                    codes: ["BS Criminal Justice (Administration of Justice)", "BS Criminal Justice (Homeland Security)", "BS Criminal Justice (Law Enfor and Public Safety"]
                },
            ]
        },
    ]

    const sort = () => {
        if (selected === "School"){
            const filtered = schoolsList.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
    
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        }
        else if (selected === "Major"){
            const filtered = majorsList.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
    
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        } 
        else if (selected === "MOS Code"){
            const filtered = mosList.filter(post => {
                if (searchInput === ''){
                    return post;
                } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }else if(post.datas[0].data.toLowerCase().includes(searchInput.toLowerCase())){
                    return post;
                }
    
            })
            return (
                <>
                {panelCode(filtered)}
                </>
            ) 
        } 
    }

    const panelCode = (content) =>
        content.map((school, index) => {
            return(
                <Disclosure key={index}>
                {({ open }) => (
                <div className='p-2 hover:bg-gray-200 hover:rounded-lg'>
                    <Disclosure.Button className="flex items-center rounded-lg justify-between text-left w-full p-3 font-medium border bg-dod-300/50 border-gray-300 hover:opacity-90 hover:shadow ">
                        {school.name}
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
                        {school.datas.map((data, index) => {
                            return(
                                <>
                                <Disclosure key={index}>
                                    {({ open }) => (
                                    <div className='p-2 hover:bg-gray-200 hover:rounded-lg'>
                                        <Disclosure.Button className="flex items-center rounded-lg justify-between text-left w-full p-2 font-medium border bg-slate-300  border-gray-300 hover:opacity-90 hover:shadow ">
                                            {data.data}
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
                                        {data.codes?.map((code, index) => {
                                            return(
                                                <div className='flex flex-row text-dod-700 font-bold hover:underline'> {code} </div>
                                            );
                                        })}
                                        </Disclosure.Panel>
                                        </Transition>
                                    </div> )}
                                </Disclosure>
                                </>
                            );
                        })}
                    </Disclosure.Panel>
                    </Transition>
                </div> )}
                </Disclosure>
            );
        });

        const handleChange = (e) => {
            setSearchInput(e.target.value);
            console.log(searchInput)
        };

    return (
        <div>
            <DefaultLayout>
                <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                    <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                        <div className='flex flex-row justify-between'>  
                            Degree Pathways Catalog
                        </div> 
                    </h1>
                    <div>
                        <input type="text" className=" w-1/2 mb-4 pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder={`Search for ${selected}`} onChange={handleChange} value={searchInput} />
                    </div>
                    <div className='flex align-middle '>
                         <div className='p-2 font-medium'> Filter By MOS Code: </div> 
                        <Dropdown options={["All", "ABE", "ABF", "ABH", "AC", "AD", "AE", "BM", "CS", "CTR", "DC", "EM", "HT", "IC", "PS", "SW", "UT", "YN"]} keyName={"degreeFilter"} initialValue={"All"} onChange={onFilterChange} />
                        <div className='p-2 font-medium'> Sort By: </div> 
                        <Dropdown options={["School", "Major"]} keyName={"degreeFilter"} initialValue={"School"} onChange={onChange} />
                       

                    </div>
                    <h2 className='pb-4 pl-4 mt-4 mb-4 text-2xl font-medium'>
                        <div className='flex flex-row justify-between'>  
                            Degree Pathways By {selected}
                        </div> 
                    </h2>
                    {sort()}
                </div>
            </DefaultLayout>
        </div>
    );
}