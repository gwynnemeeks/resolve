import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const IntentionContext = createContext()

// This component establishes what data can be used.
export const IntentionProvider = (props) => {
    const [intentions, setIntentions] = useState([])

    const getIntentions = () => {
        return fetch("http://localhost:8088/intentions?_expand=journey")
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
        allows any child elements to access them.
    */
    return (
        <IntentionContext.Provider value={{
            intentions, getIntentions, addIntention
        }}>
            {props.children}
        </IntentionContext.Provider>
    )
}
