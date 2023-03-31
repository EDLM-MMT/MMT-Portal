import Dropdown from "@/components/dropdowns/Dropdown";
import { useRouter } from "next/router"
import { useState } from "react";

export default function DropdownViewCard({ title, options, routePath,  }){
    const router = useRouter();

    const enrollmentList = [
        {   year: "2022",
            datas: [
                {
                    totalPersonnel: 174852,
                    activePersonnel: 144452,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "American Military University"
                }
            ]
        },
        {   year: "2021",
            datas: [
                {
                    totalPersonnel: 150852,
                    activePersonnel: 120512,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "City University"
                }
            ]
        },
        {   year: "2020",
            datas: [
                {
                    totalPersonnel: 124852,
                    activePersonnel: 95391,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "University of Maryland Global Campus"
                }
            ]
        },
        {   year: "2019",
            datas: [
                {
                    totalPersonnel: 152852,
                    activePersonnel: 122785,
                    separatedPersonnel: 30400,
                    numberInstitutes: 25,
                    mostPopularInstitute: "Southern New Hampshire University Online (Main Campus)"
                }
            ]
        }
    ];

    const [dropdownList, setDropdownList] = useState(enrollmentList);
    const [year, setYear] = useState("2022")


    const onChange = (e) => {
        console.log(e.target.value);
        setYear(e.target.value);
        //panelCode(e.target.value);
    }

    const panelCode = (content) =>{
        return(
            dropdownList.map((value, index) => {
                if (value?.year === content){
                    return(
                        <div>
                            {value?.datas.map((data,index) =>{
                                return(
                                    <div>
                                        <div className="mt-12"><b>Total Personnel Enrolled: </b>{data.totalPersonnel}</div>
                                        <div className="mt-4"><b>Active Personnel Enrolled: </b>{data.activePersonnel}</div>
                                        <div className="mt-4"><b>Separated Personnel Enrolled </b>{data.separatedPersonnel}</div>
                                        <div className="mt-4"><b>Number of Institutes: </b>{data.numberInstitutes}</div>
                                        <div className="mt-4"><b>Most Popular Institute by Enrollment: </b>{data.mostPopularInstitute}</div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                
            })
        )
    }


    return(
        <div className='bg-white border rounded-md w-1/2 mr-4 border-gray-200 p-4 shadow-lg focus:shadow-lg px-10'>
            <h1 className='flex text-xl font-semibold h-14 items-center justify-center align-middle border-b'>
                {title}
            </h1>
            <div className='mt-4 font-medium'> <b className="pr-4">Year:</b>
                <Dropdown options={options} keyName={"Display"} initialValue={"2022"} onChange={onChange} />
                {panelCode(year)}
            </div> 
        </div>
    )
}