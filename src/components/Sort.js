import { useEffect, useState } from "react";
import Dropdown from "./dropdowns/Dropdown";
//import modifiedData from "../data/programAdmin/accountsManagement.json";


export default function Sort({modifiedData, setModifyData}) {


    const onChange = (e) => {
        console.log(e.target.name)
        if(e.target.name === "Name"){
            console.log("we're getting here")
            //Sort(modifiedData);
            setModifyData(nameListSort());
            console.log("nameListSort:",nameListSort())

        } else {
            setModifyData(roleListSort());
            console.log("roleListSort:",roleListSort())

        }
    }
    
    const nameListSort = () => {
        let newArray = modifiedData.sort(function(a, b) {
            const nameA = a.name;
            const nameB = b.name;
            if (nameA > nameB) {
              return 1;
            }
            if (nameA < nameB) {
              return -1;
            }
          
            return 0;
          });
          console.log("name newArray: ",newArray)
          //setModifyData(newArray);

        return newArray
    }

    const roleListSort = () => {
        let newArray = modifiedData.sort(function(a, b) {
            const roleA = a.role;
            const roleB = b.role;
            if (roleA > roleB) {
              return 1;
            }
            if (roleA < roleB) {
              return -1;
            }
          
            return 0;
          });
          console.log("role newArray: ", newArray)
          //setModifyData(newArray);
        return newArray
    }
    


    return(
        <>
            <div className='p-2 font-medium'> Sort By: </div> 
            <Dropdown options={["Name", "Role"]} keyName={"Sort"} initialValue={"Most Recent"} onChange={onChange} />
        </>
    );
}
