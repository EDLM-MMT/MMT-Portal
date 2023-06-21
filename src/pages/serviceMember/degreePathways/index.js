import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect} from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';
import AddBtn from '@/components/buttons/AddButton';
import ViewBtn from '@/components/buttons/ViewBtn';
import Accordion from '@/components/Accordion';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { useRouter } from "next/router"
import axios from 'axios';
import { data } from 'autoprefixer';
import useStore from '@/store/store';




export default function DegreePathways() {  
    const [selected, setSelected] = useState("School");
    const [searchInput, setSearchInput] = useState("");
    const [degree, setDegree] = useState([]);

    const user = useStore((state) => state.userData);

    const router = useRouter();

    useEffect(() => {
        axios
          .get(`/api/careerCounseling`)
          .then((res) => {
            let data = res.data.counseling
            console.log("data:", data)
            setDegree(data);
          })
          .catch((err) => {
            console.log(err);
          });

    }, []);

    console.log("degree list:", degree);

    // const handlePost = (newDegree) =>{
    //     axios.post('/api/careerCounseling', {body: newDegree}).then((response) => {
    //         console.log(response.status, response.data);
    //         console.log("degree list inside axios post: ", degree)
            
    //     });
    // }


    const onChange = (e) => {
        setSelected(e.target.name);
    }

    const onFilterChange = (e) => {
    }

    const schoolsList = [
        {   name: "City University",
            datas: [
                {
                    data: "BGS General Studies Overview",
                    codes: ["Hours Required for Degree: 124", "Hours Still Needed: 109", "Start Date: August"]
                },
                {
                    data: "BA Applied Psychology",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: August"]
                },
                {
                    data: "BA Applied Psychology (Criminal Behavior)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 102", "Start Date: January"]
                },
                {
                    data: "BSBA Project Management",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: August"]
                },
                {
                    data: "BSIS Information Networking Track",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 98", "Start Date: August"]
                },
                {
                    data: "BSIS Information Security",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: August"]
                },
                {
                    data: "BSIS Programming",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 106", "Start Date: August"]
                },
                {
                    data: "BSIS Speciality Systems Development and Mgmt",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 96", "Start Date: January"]
                },
                {
                    data: "BSIS Web 2.0 Web Track",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 102", "Start Date: August"]
                }
            ]
        },
        {   name: "Emory Riddle",
            datas: [
                {
                    data: "AS Professional Aeronautics",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: August"]
                },
                {
                    data: "BS Professional Aeronautics",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 102", "Start Date: January"]
                },
                {
                    data: "BS Technical Management",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 98", "Start Date: August"]
                }
            ]
        },
        {   name: "Florida National University",
            datas: [
                {
                    data: "AA Business Administration",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: August"]
                },
                {
                    data: "AA Criminal Justice",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 103", "Start Date: August"]
                },
                {
                    data: "AS Accounting",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 100", "Start Date: January"]
                },
                {
                    data: "AS Business Administration",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 98", "Start Date: August"]
                },
                {
                    data: "AS Computer Information Technology",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 112", "Start Date: January"]
                }
            ]
        },
        {   name: "Fort Hays State University",
            datas: [
                {
                    data: "BA Sociology",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 86", "Start Date: August"]
                },
                {
                    data: "BGS General Studies",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 98", "Start Date: January"]
                },
                {
                    data: "BS Justice Studies",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: August"]
                },
                {
                    data: "BS Organizational Leadership",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 102", "Start Date: January"]
                }
            ]
        },
        {   name: "Liberty University",
            datas: [
                {
                    data: "BS Interdisciplinary Studies",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 89", "Start Date: August"]
                },
                {
                    data: "BS Psychology",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: January"]
                },
                {
                    data: "BS Religion",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 116", "Start Date: August"]
                }
            ]
        },
    ]

    const majorsList = [
        {   name: "AA Business Administration",
            datas: [
                {
                    data: "American Military University (WV)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: January"]
                },
                {
                    data: "Florida National University (FL)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 110", "Start Date: August"]
                },
                {
                    data: "Strayer University (DC)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 96", "Start Date: January"]
                },
            ]
        },
        {   name: "AAS Criminal Justice",
            datas: [
                {
                    data: "Bismarck State College (ND)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 97", "Start Date: January"]
                },
                {
                    data: "Central Texas College (TX)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 98", "Start Date: August"]
                },
                {
                    data: "Dallas County Community College District - TeleCollege (TX)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 102", "Start Date: January"]
                },
            ]
        },
        {   name: "BBA Business Administration (General)",
            datas: [
                {
                    data: "American Military University (WV)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 111", "Start Date: January"]
                },
                {
                    data: "American Military University (WV)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 104", "Start Date: January"]
                },
                {
                    data: "Berkeley College - Online (NJ)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 109", "Start Date: August"]
                },
                {
                    data: "University of the Incarnate Word (TX)",
                    codes: ["Hours Required for Degree: 120", "Hours Still Needed: 115", "Start Date: August"]
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
    }

    const handleClick = (name, schoolData) => {

        console.log("school data: ", schoolData)
          
        const newDegree= {
            "id": 303,
            "degree": schoolData.data,
            "school": name,
            "submitted_by": user?.learner.personnel.person.name,
            "username": "",
            "personid": user?.learner.personnel.person.personid,
            "mosCode": "AET",
            "degree_startDate": "May 2023",
            "projected_graduation": "December 2027",
            "assigned_eso": "Luis Doe",
            "total_creditHours": 60,
            "creditHours_completed": 28,
            "course_plan": [
                {
                    "course_number": "MAC1105",
                    "course_name": "Intro to Algebra",
                    "required": "Yes",
                    "credit_hours": 3,
                    "projected_semester": "Fall 2022",
                    "status": "Approved"
                }
            ],
            "counselingComments": [],
            "ESOComments": [
                {
                    "date": "2/14/2023 3:12:57 PM",
                    "purpose": "Approved",
                    "comment": "Approved added required courses"

                }
            ]
        }
        
        //handlePost(newDegree)

        axios.post('/api/careerCounseling', {body: newDegree}).then((response) => {
            console.log(response.status, response.data);
            console.log("degree list inside axios post: ", degree)          
        });
        
        router.push("/serviceMember/counseling");
    }

    const panelCode = (content) =>
        content.map((school, index) => {
            return(
                <Accordion title={school.name} className={"p-3 bg-dod-300/50"}
                content={
                    <div>
                        {school.datas.map((data, index) => {
                            return(
                            <Accordion title={data.data} className={"p-2 bg-slate-300"} 
                                content={
                                <div className='flex flex-row justify-between'>
                                {data.codes?.map((code, index) => {
                                    return(
                                        <div className='flex flex-col font-bold'> 
                                            {code}
                                        </div>
                                    );
                                })}
                                <div className="flex flex-row gap-2">
                                    {<ViewBtn path={`/serviceMember/credits`}/>}
                                    {/* {<AddBtn btnText={"Add to List"} link={"/serviceMember/counseling"}/>} */}
                                    {<button 
                                        id={'add-button-to-list'}
                                        className='flex justify-center items-center w-max px-2 p-1.5 gap-2 dod-500 hover:shadow-md font-medium rounded-lg text-sm text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none' 
                                        title='Add to list'
                                        onClick={()=> handleClick(school.name, data)}
                                    >
                                        <PlusCircleIcon className='h-5 w-5'/>
                                        Add to List
                                    </button>}
                                </div>
                                </div>
                            }/>
                            );
                        })}
                    </div>
                }/>
            );
        });

        const handleChange = (e) => {
            setSearchInput(e.target.value);
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
                        <input type="text" className=" w-1/2 mb-1 pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder={`Search for School or Major`} onChange={handleChange} value={searchInput} />
                    </div>
                    <div className='flex align-middle '>
                         <div className='p-2 font-medium'> Filter By MOS Code: </div> 
                        <Dropdown options={["All", "ABE", "ABF", "ABH", "AC", "AD", "AE", "BM", "CS", "CTR", "DC", "EM", "HT", "IC", "PS", "SW", "UT", "YN"]} keyName={"MOS"} initialValue={"All"} onChange={onFilterChange} />
                        <div className='p-2 font-medium'> Sort By: </div> 
                        <Dropdown options={["School", "Major"]} keyName={"Degree"} initialValue={"School"} onChange={onChange} />
                    </div>
                    {sort()}
                </div>
            </DefaultLayout>
        </div>
    );
}