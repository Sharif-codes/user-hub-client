import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchText, userFilter } from "../features/search/searchSlice";
import axios from "axios";

const FilterUser = ({domainNames}) => {
    const [selectedGender,setSelectedGender]=useState("")
    const [selectedDomain,setSelectedDomain]=useState("")
    const [selectedAvailability,setSelectedAvailability]=useState("")
    const [filterItem,setFilterItem]=useState({})
    const dispatch = useDispatch()
    const [searchedText, setSearchText] = useState("")
    const handleSearch = (e) => {
        setSearchText(e.target.value)
        dispatch(searchText(e.target.value))
    }
    const handleGender=(event)=> {
        const selectedOption = event.target.value;
        setSelectedGender(selectedOption);
      }
    const handleDomain=(event)=> {
        const selectedOption = event.target.value;
        setSelectedDomain(selectedOption);
      }
    const handleAvailability=(event)=> {
        const selectedOption = event.target.value;
        setSelectedAvailability(selectedOption);
      }
      useEffect(()=>{
        const selectedFilter= {selectedDomain,selectedGender,selectedAvailability}
        setFilterItem(selectedFilter)
      },[selectedAvailability, selectedDomain, selectedGender])
      dispatch(userFilter(filterItem))
    // console.log("searched text onchange:",searchedText);
    return (
        <div className="flex flex-col justify-between md:flex-row">
            <form className="max-w-md" onChange={handleSearch}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-72 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search by User's Name" required />

                </div>

            </form>
            <div className="grid grid-cols-4 gap-1 items-center">
                <div>
                    <p>Filter by:</p>
                </div>
                <div>
                <select className="bg-blue-100 w-40 p-2 rounded-md max-w-xs" onClick={handleDomain}>
                        <option disabled value="">Domain</option>
                        {domainNames.map((domain,idx)=><option key={idx}>{domain}</option>)}
                        
                    </select>
                    
                </div>
                <div>
                <select className=" bg-blue-100 w-40 p-2 rounded-md max-w-xs" onClick={handleGender}>
                        <option disabled value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                <select className="bg-blue-100 w-40 p-2 rounded-md max-w-xs" onClick={handleAvailability}>
                        <option disabled value="">Availibility</option>
                        <option>true</option>
                        <option>false</option>
                    </select>
                </div>

            </div>


        </div>
    );
};

export default FilterUser;