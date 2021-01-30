import React, {useContext, useState} from 'react'
import {Context} from "../context/context"

export default function FormSidebarContainer() {
    const {state, dispatch} = useContext(Context)
    const {jobs} = state;
    const [isChecked, setIsChecked] = useState(false);
    const [location, setLocation] = useState("")

    function handleCheckboxLocation() {
        const fullTimeJobs = jobs.filter(job => job.type === "Full Time")
        setIsChecked(!isChecked)
        dispatch({type:"SEARCH_FULL_TIME_JOB", value: fullTimeJobs})
    }
    const searchByCityName = jobs.filter(job => job.location.toLowerCase().includes(location))
    function handleSearchCityName(e) {
        setLocation(e.target.value)
        dispatch({ type: "SEARCH_BY_CITYNAME", value: searchByCityName })
    }
    return (
        <>
        <div>
             <fieldset>
               <input 
               type="checkbox" 
               checked={isChecked}
               onChange={handleCheckboxLocation}/>
               <label>Full time</label>
            </fieldset>
        </div>
        <form className="search-city">
                <label>Location</label>
                <fieldset>
                    <i className="ri-earth-line"></i>
                    <input
                        type="text"
                        placeholder="Search by city"
                        value={location}
                        onChange={handleSearchCityName}
                    />
                </fieldset>
            </form>
        </>
    )
}
