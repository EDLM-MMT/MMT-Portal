import Dropdown from "./dropdowns/Dropdown";

export default function Sort({data, setModifiedData}) {
  
  const onChange = (e) => {
    if(e.target.name === "Name"){
      setModifiedData(nameListSort([...data]));
    } else {
      setModifiedData(roleListSort([...data]));
    }
  }
  
  const nameListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
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
    return newArray
  }

  const roleListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
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
    return newArray
  }

  return(
    <>
      <div className='p-2 font-medium'> Sort By: </div> 
      <Dropdown options={["Name", "Role"]} keyName={"Sort"} initialValue={"Most Recent"} onChange={onChange} />
    </>
  );
}
