import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const IntentionContext = createContext()

// This component, IntentionProvider, establishes what data can be used.

// and the useState() hook defines a variable that holds the state of the component, 
// and a function that updates it: so intentions is the variable that holds the data
// setIntentions is the function that is used to modify that state

export const IntentionProvider = (props) => {
    const [intentions, setIntentions] = useState([])

    const getIntentions = () => {
        return fetch("http://localhost:8088/intentions?_expand=reflection")
            .then(res => res.json())
            .then(setIntentions)
    }

    const addIntention = intentionObj => {
        return fetch("http://localhost:8088/intentions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(intentionObj)
        })
            .then(getIntentions)
    }

    /*
        You return a context provider which has the
        `intentions` state, `getIntentions` function,
        and the `addIntention` function as keys. This
        allows, or exposes the context provider to
        any child elements and allows them to access it.
    */
    return (
        <IntentionContext.Provider value={{
            intentions, getIntentions, addIntention
        }}>
            {props.children}
        </IntentionContext.Provider>
    )
}
