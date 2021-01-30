import React, {useReducer, useEffect} from 'react'
const Context = React.createContext()
const JOBS_API = " https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description"
export default function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "FETCH_DATA": {
                return {
                    ...state, loading: false, jobs: action.jobs

                }
            }
        }
    }, {
        jobs: [],
        loading: true
    })
    useEffect(() => {
        fetch(JOBS_API)
            .then(response => response.json())
            .then(data => dispatch({ type: "FETCH_DATA", jobs: data }))
    }, []);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
export { ContextProvider, Context}