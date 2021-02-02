import React, {useReducer, useEffect, useState} from 'react'
const Context = React.createContext()

export default function ContextProvider({children}) {
    const [query, setQuery] = useState("London")
    const JOBS_API = ` https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location="${query}"`
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "FETCH_DATA": {
                return {
                    ...state, loading: false, jobs: action.jobs

                }
            }
            case "SEARCH_JOB_BY_NAME": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }
            case "SEARCH_FULL_TIME_JOB": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }
            case "SEARCH_BY_CITYNAME": {
                return {
                    ...state,
                    jobs: action.value
                }
            }
            case "SEARCH_JOB_IN_UNITED_STATES": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }
            case "SEARCH_JOB_IN_NEW_YORK": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }
            case "SEARCH_JOB_IN_BARCELONA": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }
            case "SEARCH_JOB_IN_BERLIN": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }


        }
    }, {
        jobs: [],
        loading: true
    })

    async function fetchData() {
        const response = await fetch(JOBS_API)
        const data = await response.json()
        dispatch({ type: "FETCH_DATA", jobs: data })
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <Context.Provider value={{state, dispatch, query, setQuery, fetchData}}>
            {children}
        </Context.Provider>
    )
}
export { ContextProvider, Context}
