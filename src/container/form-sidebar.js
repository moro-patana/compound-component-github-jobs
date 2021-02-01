import React, {useContext, useState} from 'react'
import {Context} from "../context/context"

export default function FormSidebarContainer() {
    const {state, dispatch, query, setQuery, fetchData} = useContext(Context)
    console.log(query);
    const {jobs} = state;
    

    const cityList = [
        {
            id: 1612154414295,
            name: "London"
        },
        {
            id: 1612154414296,
            name: "Amsterdam"
        },
        {
            id: 1612154414292,
            name: "New York"
        },
        {
            id: 1612154414287,
            name: "Berlin"
        },
    ]
    function searchCity(e) {
        setQuery(e.target.value);
        fetchData()
    }
    function checkboxSearch(e, id) {
            console.log(e.target.id);
            setQuery(e.target.value)
            fetchData()

    }
    const [isChecked, setIsChecked] = useState(false);
    const [location, setLocation] = useState("")

    function handleCheckboxLocation() {
        const fullTimeJobs = jobs.filter(job => job.type === "Full Time")
        setIsChecked(!isChecked)
        dispatch({type:"SEARCH_FULL_TIME_JOB", value: fullTimeJobs})
    }
    const searchByCityName = jobs.filter(job => job.location.toLowerCase().includes(location))
    function handleSearchCityName(e) {
        setQuery(e.target.value)
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
                        value={query}
                        onChange={searchCity}
                    />
                </fieldset>
            </form>
            {cityList.map(city => (
                <div key={city.id}>
                    <input 
                    type="checkbox"
                    id={city.id}
                    value={city.name}
                    onClick={checkboxSearch}

                    />
                    <label>{city.name}</label>
                </div>
            ))}
        </>
    )
}
